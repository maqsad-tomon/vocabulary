// Web Speech API va Web Audio Sintizatori (Ovozli Talaffuz va O'yin Ovoz Effektlari)

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.rate = 0.9;
    this.pitch = 1.0;
    this.lang = 'en-US';
    this.voice = null;
    this.audioCtx = null;
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      // Default to American or British English natural voice
      const preferred = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) ||
                        voices.find(v => v.lang === 'en-US') ||
                        voices.find(v => v.lang.startsWith('en'));
      if (preferred) {
        this.voice = preferred;
      }
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  speak(text, speed = null) {
    if (!this.synth) {
      console.warn("Speech Synthesis is not supported in this browser.");
      return;
    }

    this.synth.cancel(); // Cancel ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed || this.rate;
    utterance.pitch = this.pitch;
    utterance.lang = this.lang;
    if (this.voice) {
      utterance.voice = this.voice;
    }

    this.synth.speak(utterance);
  }

  setAccent(accent = 'en-US') {
    this.lang = accent;
    const voices = this.synth ? this.synth.getVoices() : [];
    const matched = voices.find(v => v.lang === accent);
    if (matched) this.voice = matched;
  }

  setSpeed(speed) {
    this.rate = parseFloat(speed);
  }

  // Web Audio Synthetic Sound Effects (No external mp3 required!)
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playCorrectSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.error(e);
    }
  }

  playWrongSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.error(e);
    }
  }

  playStreakSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.2);
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export const speechEngine = new SpeechEngine();
