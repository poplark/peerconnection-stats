// use samples data to test
// import { Reports } from '../src/report';
import { AudioInputReports } from '../src/simple-reports';

import {
  chromeInOriginalReports,
  // chromeOutOriginalReports,
  // chromeInLegacyOriginalReports,
  // chromeOutLegacyOriginalReports,
  firefoxInOriginalReports,
  // firefoxOutOriginalReports,
  safariInOriginalReports,
  // safariOutOriginalReports
} from './utils/load-samples';

describe('audio input reports', function (): void {
  it('chrome', function (): void {
    const reports = new AudioInputReports(chromeInOriginalReports);
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
    expect(reports.jitter).toBeGreaterThanOrEqual(0);
    expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
    expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
    expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
    expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);
  });

  it('firefox', function (): void {
    const reports = new AudioInputReports(firefoxInOriginalReports);
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
    expect(reports.jitter).toBeGreaterThanOrEqual(0);
    expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
    expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
    expect(reports.audioLevel).toEqual(-1);
    expect(reports.totalAudioEnergy).toEqual(-1);
  });

  it('safari', function (): void {
    const reports = new AudioInputReports(safariInOriginalReports);
    expect(reports.bytesReceived).toBeGreaterThanOrEqual(0);
    expect(reports.jitter).toBeGreaterThanOrEqual(0);
    expect(reports.packetsLost).toBeGreaterThanOrEqual(0);
    expect(reports.packetsReceived).toBeGreaterThanOrEqual(0);
    expect(reports.audioLevel).toBeGreaterThanOrEqual(0);
    expect(reports.totalAudioEnergy).toBeGreaterThanOrEqual(0);
  });

  it('edge todo', function (): void {
    // todo
    expect('edge').toBe('edge');
  });
});

describe('audio reports', function (): void {
  it('chrome reports', function (): void {
    // todo
    expect('chrome').toBe('chrome');
  });

  it('firefox reports', function (): void {
    // todo
    expect('firefox').toBe('firefox');
  });

  it('opera reports', function (): void {
    // todo
    expect('opera').toBe('opera');
  });

  it('safari reports', function (): void {
    // todo
    expect('safari').toBe('safari');
  });
});

describe('video reports', function(): void {
});

describe('pair reports', function(): void {
});