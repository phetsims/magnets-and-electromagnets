// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import MagnetsAndElectromagnetsColors from '../common/MagnetsAndElectromagnetsColors.js';
import magnetsAndElectromagnets from '../magnetsAndElectromagnets.js';
import MagnetsAndElectromagnetsModel from './model/MagnetsAndElectromagnetsModel.js';
import MagnetsAndElectromagnetsScreenView from './view/MagnetsAndElectromagnetsScreenView.js';
import MagnetsAndElectromagnetsStrings from '../MagnetsAndElectromagnetsStrings.js';

type SelfOptions = {
  //TODO add options that are specific to MagnetsAndElectromagnetsScreen here
};

type MagnetsAndElectromagnetsScreenOptions = SelfOptions & ScreenOptions;

export default class MagnetsAndElectromagnetsScreen extends Screen<MagnetsAndElectromagnetsModel, MagnetsAndElectromagnetsScreenView> {

  public constructor( providedOptions: MagnetsAndElectromagnetsScreenOptions ) {

    const options = optionize<MagnetsAndElectromagnetsScreenOptions, SelfOptions, ScreenOptions>()( {
      name: MagnetsAndElectromagnetsStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: MagnetsAndElectromagnetsColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new MagnetsAndElectromagnetsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new MagnetsAndElectromagnetsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

magnetsAndElectromagnets.register( 'MagnetsAndElectromagnetsScreen', MagnetsAndElectromagnetsScreen );