import { SimpleReports } from './base';

export class VideoInputReports extends SimpleReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameWidth: number;
  frameHeight: number;
  framesReceived: number;
  framesDropped: number;

  /**
   * chrome - { type: inbound-rtp, mediaType: video }
   * firefox - { type: inbound-rtp, mediaType: video }
   * safari - { type: inbound-rtp, mediaType: video }
   */
  bytesReceived: number;
  packetsReceived: number;
  packetsLost: number;
  nackCount: number;
  pliCount: number;
  firCount: number;

  /**
   * chrome - { type: track, kind: video }
   * firefox - { type: inbound-rtp, kind: video }
   * safari - { type: track }
   */
  framesDecoded: number;

  /**
   * firefox - { type: inbound-rtp, kind: video }
   */
  jitter: number;
}

export class VideoOutputReports extends SimpleReports {
  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  frameWidth: number;
  frameHeight: number;

  /**
   * chrome - { type: outbound-rtp, mediaType: video }
   * firefox = { type: outbound-rtp, mediaType: video}
   * safari = { type: outbound-rtp, mediaType: video}
   */
  bytesSent: number;
  packetsSent: number;
  nackCount: number;
  pliCount: number;
  firCount: number;
  framesEncoded: number

  /**
   * chrome - { type: remote-inbound-rtp, kind: video }
   * firefox - { type: remote-inbound-rtp, kind: video }
   */
  packetsLost: number;
  jitter: number;
  roundTripTime: number;

  /**
   * chrome - { type: track, kind: video }
   * safari - { type: track }
   */
  framesSent: number;
}

// ============== Legacy ================/

// chrome - { type: ssrc, mediaType: video }
export class VedioInputLegacyReports extends SimpleReports {
  frameWidth: number; // googFrameWidthReceived
  frameHeight: number; // googFrameHeightReceived

  bytesReceived: number;
  packetsReceived: number;
  packetsLost: number;

  nackCount: number; // googNacksSent
  pliCount: number; // googPlisSent
  firCount: number; // googFirsSent

  // framesReceived: number; // no corresponding data
  // framesDropped: number; // no corresponding data
  framesDecoded: number;
}

// chrome - { type: ssrc, mediaType: video }
export class VideoOutputLegacyReports extends SimpleReports {
  frameWidth: number; // googFrameWidthSent
  frameHeight: number;  // googFrameHeightSent

  bytesSent: number;
  packetsSent: number;
  nackCount: number; // googNacksReceived
  pliCount: number; // googPlisReceived
  firCount: number; // googFirsReceived
  framesEncoded: number

  packetsLost: number;
  // jitter: number; // no corresponding data
  roundTripTime: number; // googRtt - ms

  // framesSent: number; // no corresponding data
}