import { SimpleReports } from './base';

export class CandidatePairReports extends SimpleReports {
  /**
   * chrome - { type: candidate-pair }
   * firefox - { type: candidate-pair, selected: true }
   * safari - { type: candidate-pair }
   */
  bytesSent: number;
  bytesReceived: number;

  /**
   * chrome - { type: candidate-pair }
   * safari - { type: candidate-pair }
   */
  currentRoundTripTime: number;

  /**
   * chrome - { type: candidate-pair }
   * safari - { type: candidate-pair }
   */
  totalRoundTripTime: number;
}

// ============== Legacy ================/

export class CandidatePairLegacyReports extends SimpleReports {
  // chrome - { type: googCandidatePair }
  bytesReceived: number;
  bytesSent: number;
  packetsSent: number;
  currentRoundTripTime: number; // googRtt - ms
}