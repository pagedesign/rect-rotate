export const version = "%VERSION%";

export class RectRotate {
  protected x: number;
  protected y: number;
  protected cx: number;
  protected cy: number;
  constructor(initX: number, initY: number, centerX: number, centerY: number) {
    // 以中心点作为坐标原点
    this.x = initX - centerX;
    this.y = initY - centerY;
    this.cx = centerX;
    this.cy = centerY;
  }

  getRotate(x: number, y: number) {
    x = x - this.cx;
    y = y - this.cy;

    const angle = ((Math.atan2(y, x) - Math.atan2(this.y, this.x)) / Math.PI) * 180;

    return (angle + 360) % 360;
  }
}

export default RectRotate;
