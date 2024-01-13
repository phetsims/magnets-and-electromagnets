// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import magnetsAndElectromagnets from '../../magnetsAndElectromagnets.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to MagnetsAndElectromagnetsModel here
};

type MagnetsAndElectromagnetsModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class MagnetsAndElectromagnetsModel implements TModel {

  public constructor( providedOptions: MagnetsAndElectromagnetsModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

magnetsAndElectromagnets.register( 'MagnetsAndElectromagnetsModel', MagnetsAndElectromagnetsModel );