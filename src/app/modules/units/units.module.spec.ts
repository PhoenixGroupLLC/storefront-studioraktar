import { UnitsModule } from './units.module';

describe('UnitsModule', () => {
  let unitsModule: UnitsModule;

  beforeEach(() => {
    unitsModule = new UnitsModule();
  });

  it('should create an instance', () => {
    expect(unitsModule).toBeTruthy();
  });
});
