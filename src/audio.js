export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.nextNote = 0;
    this.noteIndex = 0;
    this.noiseBuffer = null;
    this.lastStep = 0;
    this.mood = 1;
    this.drone = [];
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.55 : 0;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.22;
    this.musicGain.connect(this.master);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.58;
    this.sfxGain.connect(this.master);

    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 1.2, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;

    // Warm two-voice drone under the music.
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.8;
    filter.connect(this.musicGain);
    for (const [freq, type, vol] of [[55, 'sine', 0.16], [82.4, 'triangle', 0.055], [110, 'sine', 0.06]]) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.value = vol;
      osc.connect(gain); gain.connect(filter); osc.start();
      this.drone.push({ osc, gain, base: vol });
    }
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.045;
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();
    this.musicFilter = filter;
    this.nextNote = this.ctx.currentTime + 1.0;
  }

  setMuted(muted) {
    this.enabled = !muted;
    if (this.master) this.master.gain.setTargetAtTime(this.enabled ? 0.55 : 0, this.ctx.currentTime, 0.08);
  }

  setNight(night) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.mood = night;
    this.musicFilter.frequency.setTargetAtTime(night ? 290 : 470, t, 2.0);
    this.drone.forEach((d, i) => d.gain.gain.setTargetAtTime(d.base * (night ? 1.35 : 1), t, 2.0));
  }

  setBiome(biome) {
    if (!this.ctx || this.biome === biome) return;
    this.biome = biome;
    const base = { meadow: 55, forest: 49, volcano: 43.65, beach: 58.27, lake: 51.91, graveyard: 46.25, highlands: 41.2, cave: 36.7, town: 55, city: 58.27 }[biome] || 55;
    const t = this.ctx.currentTime;
    this.drone.forEach((d, i) => d.osc.frequency.setTargetAtTime(base * (i === 0 ? 1 : i === 1 ? 1.5 : 2), t, 1.8));
  }

  tick(night) {
    if (!this.ctx || !this.enabled || this.ctx.state !== 'running') return;
    this.setNight(night);
    const now = this.ctx.currentTime;
    if (now < this.nextNote) return;
    const scale = night ? [220, 261.63, 293.66, 329.63, 392, 440] : [261.63, 329.63, 392, 440, 523.25, 659.25];
    const chordRoots = night ? [55, 58.27, 49] : [55, 65.41, 73.42, 82.41];
    const root = chordRoots[Math.floor(this.noteIndex / 8) % chordRoots.length];
    const note = scale[(this.noteIndex * 3 + Math.floor(this.noteIndex / 4)) % scale.length];
    this.note(note, 0.2, 2.4, 'triangle', 0.055);
    if (this.noteIndex % 4 === 0) this.note(root * 2, 0.35, 3.2, 'sine', 0.04);
    if (this.noteIndex % 8 === 0) this.note(root, 0.5, 4.0, 'sine', 0.05);
    this.noteIndex++;
    this.nextNote = now + (night ? 2.8 : 2.25) + Math.random() * 0.4;
  }

  note(freq, attack, duration, type = 'sine', volume = 0.08, destination = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(destination || this.musicGain);
    osc.start(t); osc.stop(t + duration + 0.02);
  }

  noise(duration = 0.18, volume = 0.15, filterFreq = 1800, type = 'lowpass') {
    if (!this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(filterFreq, t);
    filter.frequency.exponentialRampToValueAtTime(Math.max(80, filterFreq * 0.25), t + duration);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(filter); filter.connect(gain); gain.connect(this.sfxGain);
    src.start(t); src.stop(t + duration + 0.02);
  }

  tone(freq, duration = 0.14, volume = 0.14, type = 'square', slide = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + duration);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain); gain.connect(this.sfxGain);
    osc.start(t); osc.stop(t + duration + 0.02);
  }

  sfx(name) {
    if (!this.ctx || !this.enabled) return;
    switch (name) {
      case 'swing':
        this.noise(0.16, 0.18, 2700, 'highpass');
        break;
      case 'hit':
        this.tone(110, 0.1, 0.18, 'square', -55);
        this.noise(0.1, 0.12, 1200);
        break;
      case 'crit':
        this.tone(180, 0.13, 0.22, 'sawtooth', -100);
        this.noise(0.12, 0.15, 2200);
        break;
      case 'bow':
        this.tone(560, 0.08, 0.08, 'triangle', 300);
        this.noise(0.16, 0.08, 3000, 'highpass');
        break;
      case 'magic':
        this.tone(320, 0.32, 0.09, 'sine', 650);
        this.tone(480, 0.4, 0.05, 'triangle', 320);
        break;
      case 'holy':
        this.tone(523.25, 0.45, 0.08, 'sine', 260);
        this.tone(783.99, 0.55, 0.05, 'sine', 120);
        break;
      case 'coin':
        this.tone(880, 0.08, 0.1, 'square', 200);
        setTimeout(() => this.tone(1320, 0.1, 0.08, 'square'), 60);
        break;
      case 'potion':
        this.tone(330, 0.2, 0.08, 'sine', 220);
        this.tone(440, 0.26, 0.06, 'triangle', 160);
        break;
      case 'level':
        [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this.tone(f, 0.3, 0.1, 'triangle'), i * 110));
        break;
      case 'quest':
        [440, 554, 659].forEach((f, i) => setTimeout(() => this.tone(f, 0.25, 0.08, 'triangle'), i * 100));
        break;
      case 'open':
        this.tone(220, 0.18, 0.1, 'triangle', 100);
        this.noise(0.2, 0.08, 700);
        break;
      case 'error':
        this.tone(130, 0.18, 0.12, 'sawtooth', -20);
        break;
      case 'death':
        this.tone(220, 0.7, 0.12, 'sawtooth', -160);
        this.noise(0.5, 0.08, 600);
        break;
      case 'dodge':
        this.noise(0.12, 0.08, 3400, 'highpass');
        break;
      case 'footstep':
        this.noise(0.055, 0.035, 260);
        break;
      case 'thunder':
        this.noise(0.65, 0.22, 440);
        this.tone(60, 0.8, 0.14, 'sine', -20);
        break;
      case 'chest':
        [392, 523, 659, 784].forEach((f, i) => setTimeout(() => this.tone(f, 0.35, 0.08, 'triangle'), i * 90));
        break;
      case 'ui':
        this.tone(700, 0.05, 0.04, 'square', -80);
        break;
    }
  }
}
