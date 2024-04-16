
import { Point } from './point';
import { Segment } from './segment';

var start = new Point(0, 0);
var end = new Point(4, 5);

console.log(
  'Distance from origin to (4, 5) is',
  new Segment(start, end).distance
);
