import { MyOwnPipePipe } from './my-own-pipe.pipe';

describe('MyOwnPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyOwnPipePipe();
    expect(pipe).toBeTruthy();
  });
});
