import browserDetails from '../utils/browser';
import { Reports } from '../report';

export class AudioInputReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'inbound-rtp', mediaType: 'audio' }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'inbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'inbound-rtp', mediaType: 'audio' }
   */
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'inbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'inbound-rtp', mediaType: 'audio' }
   */
  get jitter(): number {
    return this._find('jitter', { type: 'inbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'inbound-rtp', mediaType: 'audio' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'inbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'audio' }
   * - firefox - no corresponding data
   * - safari - { type: 'track' }
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
   * **Note** (Data from):
   * - chrome - { type: 'track', kind: 'audio' }
   * - firefox - no corresponding data
   * - safari - no corresponding data
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'track', kind: 'audio' });
      default:
        return this._find('totalAudioEnergy');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'inbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'inbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'inbound-rtp', mediaType: 'audio' }
   */
  get ssrc(): number {
    return this._find('ssrc', { type: 'inbound-rtp', mediaType: 'audio' });
  }
}

export class AudioOutputReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'outbound-rtp', mediaType: 'audio' }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'outbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'outbound-rtp', mediaType: 'audio' }
   */
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'outbound-rtp', mediaType: 'audio' });
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - safari - no corresponding data
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

  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - safari - no corresponding data
   */
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

  /**
   * **Note** (Data from):
   * - chrome - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - firefox - { type: 'remote-inbound-rtp', kind: 'audio' }
   * - safari - no corresponding data
   */
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
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'audio' }
   * - firefox - no corresponding data
   * - safari - no corresponding data
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
   * **Note** (Data from):
   * - chrome - { type: 'media-source', kind: 'audio' }
   * - firefox - no corresponding data
   * - safari - no corresponding data
   */
  get totalAudioEnergy(): number {
    switch (browserDetails.browser) {
      case 'chrome':
        return this._find('totalAudioEnergy', { type: 'media-source', kind: 'audio' });
      default:
        return this._find('totalAudioEnergy');
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'outbound-rtp', mediaType: 'audio' }
   * - firefox - { type: 'outbound-rtp', mediaType: 'audio' }
   * - safari - { type: 'outbound-rtp', mediaType: 'audio' }
   */
  get ssrc(): number {
    return this._find('ssrc', { type: 'outbound-rtp', mediaType: 'audio' });
  }
}

// ============== Chrome - Legacy ================/

// chrome - { type: 'ssrc', mediaType: 'audio' }
export class AudioInputLegacyReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'ssrc', mediaType: 'audio'});
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get packetsReceived(): number {
    return this._find('packetsReceived', { type: 'ssrc', mediaType: 'audio'});
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'audio'});
  }
  // jitter: number; // no corresponding data

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }, and the original source is `audioOutputLevel`
   */
  get audioLevel(): number {
    return this._find('audioOutputLevel', { type: 'ssrc', mediaType: 'audio'});
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get totalAudioEnergy(): number {
    return this._find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio'});
  }
}

// chrome - { type: 'ssrc', mediaType: 'audio' }
export class AudioOutputLegacyReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'ssrc', mediaType: 'audio'});
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'ssrc', mediaType: 'audio'});
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get packetsLost(): number {
    return this._find('packetsLost', { type: 'ssrc', mediaType: 'audio'});
  }
  // jitter: number; // no corresponding data

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }, and the original source is `googRtt`
   */
  get roundTripTime(): number {
    return this._find('googRtt', { type: 'ssrc', mediaType: 'audio'});
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }, and the original source is `audioInputLevel`
   */
  get audioLevel(): number {
    return this._find('audioInputLevel', { type: 'ssrc', mediaType: 'audio'});
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'ssrc', mediaType: 'audio' }
   */
  get totalAudioEnergy(): number {
    return this._find('totalAudioEnergy', { type: 'ssrc', mediaType: 'audio'});
  }
}
