import CSSMatrix from 'dommatrix';
import SVGPCO from '../options/options';
import getPathArea from './getPathArea';
import getPathLength from './getPathLength';
import getDrawDirection from './getDrawDirection';
import getPointAtLength from './getPointAtLength';
import getPathBBox from './getPathBBox';
import isValidPath from './isValidPath';
import isPathArray from './isPathArray';
import isAbsoluteArray from './isAbsoluteArray';
import isRelativeArray from './isRelativeArray';
import isCurveArray from './isCurveArray';
import isNormalizedArray from './isNormalizedArray';
import shapeToPath from './shapeToPath';

import parsePathString from '../parser/parsePathString';
import clonePath from '../process/clonePath';
import roundPath from '../process/roundPath';
import splitPath from '../process/splitPath';
import optimizePath from '../process/optimizePath';
import reverseCurve from '../process/reverseCurve';
import reversePath from '../process/reversePath';
import normalizePath from '../process/normalizePath';
import transformPath from '../process/transformPath';
import getSVGMatrix from '../process/getSVGMatrix';

import pathToAbsolute from '../convert/pathToAbsolute';
import pathToRelative from '../convert/pathToRelative';
import pathToCurve from '../convert/pathToCurve';
import pathToString from '../convert/pathToString';
import Version from './version';

const Util = {
  CSSMatrix,
  parsePathString,
  isPathArray,
  isCurveArray,
  isAbsoluteArray,
  isRelativeArray,
  isNormalizedArray,
  isValidPath,
  pathToAbsolute,
  pathToRelative,
  pathToCurve,
  pathToString,
  getDrawDirection,
  getPathArea,
  getPathBBox,
  getPathLength,
  getPointAtLength,
  clonePath,
  splitPath,
  roundPath,
  optimizePath,
  reverseCurve,
  reversePath,
  normalizePath,
  transformPath,
  getSVGMatrix,
  shapeToPath,
  options: SVGPCO,
  Version,
};

export default Util;
