// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the 'Magnets and Electromagnets' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import MagnetsAndElectromagnetsStrings from './MagnetsAndElectromagnetsStrings.js';
import FELConstants from '../../faradays-electromagnetic-lab/js/common/FELConstants.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import BarMagnetScreen from '../../faradays-electromagnetic-lab/js/bar-magnet/BarMagnetScreen.js';
import FELPreferencesNode from '../../faradays-electromagnetic-lab/js/common/view/preferences/FELPreferencesNode.js';
import ElectromagnetScreen from '../../faradays-electromagnetic-lab/js/electromagnet/ElectromagnetScreen.js';
import FELPreferences from '../../faradays-electromagnetic-lab/js/common/model/FELPreferences.js';

// If addEarthCheckbox query parameter was not in the URL, change the default.
if ( !QueryStringMachine.containsKey( 'addEarthCheckbox' ) ) {
  FELPreferences.addEarthCheckboxProperty.value = true;
}

simLauncher.launch( () => {

  const titleStringProperty = MagnetsAndElectromagnetsStrings[ 'magnets-and-electromagnets' ].titleStringProperty;

  const screens = [
    new BarMagnetScreen( Tandem.ROOT.createTandem( 'barMagnetScreen' ) ),
    new ElectromagnetScreen( Tandem.ROOT.createTandem( 'electromagnetScreen' ) )
  ];

  const options: SimOptions = {
    credits: FELConstants.CREDITS,
    phetioDesigned: true,
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      },
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new FELPreferencesNode( {
            tandem: tandem.createTandem( 'simPreferences' )
          } )
        } ]
      }
    } )
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );