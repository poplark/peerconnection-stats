import { SimpleReports } from './base';

export class AudioInputReports extends SimpleReports {
  /**
   * chrome - { type: inbound-rtp, mediaType: audio }
   * firefox - { type: inbound-rtp, mediaType: audio }
   * safari - { type: inbound-rtp, mediaType: audio }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', [{ key: 'type', value: 'inbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }
  get packetsReceived(): number {
    return this._find('packetsReceived', [{ key: 'type', value: 'inbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }
  get jitter(): number {
    return this._find('jitter', [{ key: 'type', value: 'inbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }
  get packetsLost(): number {
    return this._find('packetsLost', [{ key: 'type', value: 'inbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }

  /**
   * chrome - { type: track, kind: audio }
   * safari - { type: track }
   */
  get audioLevel(): number {
    // todo if chrome
    return this._find('audioLevel', [{ key: 'type', value: 'track' }, { key: 'kind', value: 'audio' }]);
    // todo if safari
    // return this._find('audioLevel', [{ key: 'type', value: 'track' }]);
    // todo firefox
    // return 0
  }

  /**
   * chrome - { type: track, kind: audio }
   */
  get totalAudioEnergy(): number {
    // todo if chrome
    return this._find('totalAudioEnergy', [{ key: 'type', value: 'track' }, { key: 'kind', value: 'audio' }]);
  }
}

export class AudioOutputReports extends SimpleReports {
  /**
   * chrome - { type: outbound-rtp, mediaType: audio }
   * firefox - { type: outbound-rtp, mediaType: audio }
   * safari - { type: outbound-rtp, mediaType: audio }
   */
  get bytesSent(): number {
    return this._find('bytesSent', [{ key: 'type', value: 'outbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }
  get packetsSent(): number {
    return this._find('packetsSent', [{ key: 'type', value: 'outbound-rtp' }, { key: 'mediaType', value: 'audio' }]);
  }

  /**
   * chrome - { type: remote-inbound-rtp, kind: audio }
   * firefox - { type: remote-inbound-rtp, kind: audio }
   */
  get jitter(): number {
    // todo check chrome
    return this._find('jitter', [{ key: 'type', value: 'remote-inbound-rtp' }, { key: 'kind', value: 'audio' }]);
  }
  get packetsLost(): number {
    // todo check chrome
    return this._find('packetsLost', [{ key: 'type', value: 'remote-inbound-rtp' }, { key: 'kind', value: 'audio' }]);
  }
  get roundTripTime(): number {
    // todo check chrome
    return this._find('roundTripTime', [{ key: 'type', value: 'remote-inbound-rtp' }, { key: 'kind', value: 'audio' }]);
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get audioLevel(): number {
    // todo check chrome
    return this._find('audioLevel', [{ key: 'type', value: 'media-source' }, { key: 'kind', value: 'audio' }]);
  }

  /**
   * chrome - { type: media-source, kind: audio }
   */
  get totalAudioEnergy(): number {
    // todo check chrome
    return this._find('totalAudioEnergy', [{ key: 'type', value: 'media-source' }, { key: 'kind', value: 'audio' }]);
  }
}

// ============== Legacy ================/

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