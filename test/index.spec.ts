// use samples data to test
import { Reports } from '../src/report';

describe('reports', function (): void {
  it('chrome reports', function (): void {
    const sampleReports = new Map();
    sampleReports.set('type', 'test');
    sampleReports.set('kind', 'audio');
    const r = new Reports([sampleReports]);
    console.log('oooooo ', r);
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