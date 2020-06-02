import browserDetails from '../utils/browser';
import { Reports } from '../report';

export class CandidatePairReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'candidate-pair' }
   * - firefox - { type: 'candidate-pair', selected: true }
   * - safari - { type: 'candidate-pair' }
   */
  get bytesSent(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('bytesSent', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesSent', { type: 'candidate-pair', selected: true });
      default:
        return this._find('bytesSent', { type: 'candidate-pair' });
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'candidate-pair' }
   * - firefox - { type: 'candidate-pair', selected: true }
   * - safari - { type: 'candidate-pair' }
   */
  get bytesReceived(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('bytesReceived', { type: 'candidate-pair' });
      case 'firefox':
        return this._find('bytesReceived', { type: 'candidate-pair', selected: true });
      default:
        return this._find('bytesReceived', { type: 'candidate-pair' });
    }
  }

  /**
   * **Note** (Data from):
   * - chrome - { type: 'candidate-pair' }
   * - firefox - no corresponding data
   * - safari - { type: 'candidate-pair' }
   */
  get currentRoundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('currentRoundTripTime', { type: 'candidate-pair' });
      default:
        return this._find('currentRoundTripTime', { type: 'candidate-pair' });
    }
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'candidate-pair' }
   * - firefox - no corresponding data
   * - safari - { type: 'candidate-pair' }
   */
  get totalRoundTripTime(): number {
    switch (browserDetails.browser) {
      case 'chrome':
      case 'safari':
        return this._find('totalRoundTripTime', { type: 'candidate-pair' });
      default:
        return this._find('totalRoundTripTime', { type: 'candidate-pair' });
    }
  }
}

// ============== Chrome - Legacy ================/

export class CandidatePairLegacyReports extends Reports {
  /**
   * **Note** (Data from):
   * - chrome - { type: 'googCandidatePair' }
   */
  get bytesReceived(): number {
    return this._find('bytesReceived', { type: 'googCandidatePair' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'googCandidatePair' }
   */
  get bytesSent(): number {
    return this._find('bytesSent', { type: 'googCandidatePair' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'googCandidatePair' }
   */
  get packetsSent(): number {
    return this._find('packetsSent', { type: 'googCandidatePair' });
  }
  /**
   * **Note** (Data from):
   * - chrome - { type: 'googCandidatePair' }, and the original source is `googRtt`
   */
  get currentRoundTripTime(): number {
    return this._find('googRtt', { type: 'googCandidatePair' });
  }
}
