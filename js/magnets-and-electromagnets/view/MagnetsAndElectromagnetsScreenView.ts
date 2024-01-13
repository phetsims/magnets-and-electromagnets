// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import MagnetsAndElectromagnetsConstants from '../../common/MagnetsAndElectromagnetsConstants.js';
import magnetsAndElectromagnets from '../../magnetsAndElectromagnets.js';
import MagnetsAndElectromagnetsModel from '../model/MagnetsAndElectromagnetsModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to MagnetsAndElectromagnetsScreenView here
};

type MagnetsAndElectromagnetsScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class MagnetsAndElectromagnetsScreenView extends ScreenView {

  public constructor( model: MagnetsAndElectromagnetsModel, providedOptions: MagnetsAndElectromagnetsScreenViewOptions ) {

    const options = optionize<MagnetsAndElectromagnetsScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - MagnetsAndElectromagnetsConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - MagnetsAndElectromagnetsConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

magnetsAndElectromagnets.register( 'MagnetsAndElectromagnetsScreenView', MagnetsAndElectromagnetsScreenView );