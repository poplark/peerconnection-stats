import browserDetails from '../utils/browser';
import { SimpleReports } from './base';

export class AudioInputReports extends SimpleReports {
  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'inbound-rtp', mediaType: 'audio' });
  }
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'inbound-rtp', mediaType: 'audio' });
  }
  get jitter(): number {
    return this._find('jitter', { type: 'inbound-rtp', mediaType: 'audio' });
  }
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'inbound-rtp', mediaType: 'audio' });
  }

  /**
   * chrome - { type: track, kind: audio }
   * safari - { type: track }
   */
  get audioLevel(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('audioLevel', { type: 'track', kind: 'audio' });
      case 'safari':
        return this._find('audioLevel', { type: 'track' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: track, kind: audio }
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'track', kind: 'audio' });
      default:
    }
    return -1;
  }
}

export class AudioOutputReports extends SimpleReports {
  /**
   * chrome - { type: outbound-rtp, mediaType: audio }
   * firefox - { type: outbound-rtp, mediaType: audio }
   * safari - { type: outbound-rtp, mediaType: audio }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'outbound-rtp', mediaType: 'audio' });
  }
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'outbound-rtp', mediaType: 'audio' });
  }

  /**
   * chrome - { type: remote-inbound-rtp, kind: audio }
   * firefox - { type: remote-inbound-rtp, kind: audio }
   */
  get jitter(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('jitter', { type: 'remote-inbound-rtp', kind: 'audio' });
      case 'firefox':
        return this._find('jitter', { type: 'remote-inbound-rtp', kind: 'audio' });
      default:
    }
    return -1;
  }
  get packetsLost(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'audio' });
      case 'firefox':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'audio' });
      default:
    }
    return -1;
  }
  get roundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'audio' });
      case 'firefox':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'audio' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get audioLevel(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('audioLevel', { type: 'media-source', kind: 'audio' });
      default:
    }
    return -1;
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'media-source', kind: 'audio' });
      default:
    }
    return -1;
  }
}

// ============== todo - Legacy ================/

// chrome - { type: ssrc, mediaType: audio }
export class AudioInputLegacyReports extends SimpleReports {
  // totalAudioEnergy: number; // 总音频发送量
  // googAccelerateRate: number; // 加速率
  // googJitterReceived: number; // 抖动反馈
  // googDecodingPLC: number; // 抗丢包解码
  // googExpandRate: number; // 伸缩率
  // googPreemptiveExpandRate: number; // 伸缩抢占率
  // audioOutputLevel: number; // 播放音频幅度

  // chrome - { type: ssrc, mediaType: audio }
  bytesReceived: number;
  packetsReceived: number;
  packetsLost: number;
  // jitter: number; // no corresponding data
  audioLevel: number; // audioOutputLevel
  totalAudioEnergy: number;
}

// chrome - { type: ssrc, mediaType: audio }
export class AudioOutputLegacyReports extends SimpleReports {
  // totalAudioEnergy: number; // 总音频发送量
  // googJitterReceived: number; // 抖动反馈
  // audioInputLevel: number; // 采集音频幅度

  // chrome - { type: ssrc, mediaType: audio }
  bytesSent: number;
  packetsSent: number;
  packetsLost: number;
  // jitter: number; // no corresponding data
  roundTripTime: number; // googRtt - ms

  audioLevel: number; // audioInputLevel
  totalAudioEnergy: number;
}