import browserDetails from '../utils/browser';
import { Reports } from '../report';

export class AudioInputReports extends Reports {
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
        return this._find('audioLevel');
    }
  }

  /**
   * chrome - { type: track, kind: audio }
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'track', kind: 'audio' });
      default:
        return this._find('totalAudioEnergy');
    }
  }
}

export class AudioOutputReports extends Reports {
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
        // todo - mediaType audio ?
        return this._find('jitter', { mediaType: 'audio' });
    }
  }
  get packetsLost(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'audio' });
      case 'firefox':
        return this._find('packetsLost', { type: 'remote-inbound-rtp', kind: 'audio' });
      default:
        // todo - mediaType audio ?
        return this._find('packetsLost', { mediaType: 'audio' });
    }
  }
  get roundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'audio' });
      case 'firefox':
        return this._find('roundTripTime', { type: 'remote-inbound-rtp', kind: 'audio' });
      default:
        // todo - mediaType audio ?
        return this._find('roundTripTime', { mediaType: 'audio' });
    }
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get audioLevel(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('audioLevel', { type: 'media-source', kind: 'audio' });
      default:
        return this._find('audioLevel');
    }
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'media-source', kind: 'audio' });
      default:
        return this._find('totalAudioEnergy');
    }
  }
}

// ============== Chrome - Legacy ================/

// chrome - { type: ssrc, mediaType: audio }
export class AudioInputLegacyReports extends Reports {
  // totalAudioEnergy: number; // 总音频发送量
  // googAccelerateRate: number; // 加速率
  // googJitterReceived: number; // 抖动反馈
  // googDecodingPLC: number; // 抗丢包解码
  // googExpandRate: number; // 伸缩率
  // googPreemptiveExpandRate: number; // 伸缩抢占率
  // audioOutputLevel: number; // 播放音频幅度

  // chrome - { type: ssrc, mediaType: audio }
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'ssrc', mediaType: 'audio'});
  }
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'ssrc', mediaType: 'audio'});
  }
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'audio'});
  }
  // jitter: number; // no corresponding data

  // refer to audioOutputLevel
  get audioLevel(): number {
    return this._find('audioOutputLevel', { type: 'ssrc', mediaType: 'audio'});
  }
  get totalAudioEnergy(): number {
    return this._find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio'});
  }
}

// chrome - { type: ssrc, mediaType: audio }
export class AudioOutputLegacyReports extends Reports {
  // totalAudioEnergy: number; // 总音频发送量
  // googJitterReceived: number; // 抖动反馈
  // audioInputLevel: number; // 采集音频幅度

  // chrome - { type: ssrc, mediaType: audio }
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'ssrc', mediaType: 'audio'});
  }
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'ssrc', mediaType: 'audio'});
  }
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'audio'});
  }
  // jitter: number; // no corresponding data

  // refer to googRtt
  get roundTripTime(): number {
    return this._find('googRtt', { type: 'ssrc', mediaType: 'audio'});
  }

  // refer to audioInputLevel
  get audioLevel(): number {
    return this._find('audioInputLevel', { type: 'ssrc', mediaType: 'audio'});
  }
  get totalAudioEnergy(): number {
    return this._find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio'});
  }
}