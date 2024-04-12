// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the 'Magnets and Electromagnets' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import MagnetsAndElectromagnetsStrings from './MagnetsAndElectromagnetsStrings.js';
import BarMagnetScreen from '../../faradays-electromagnetic-lab/js/bar-magnet/BarMagnetScreen.js';
import ElectromagnetScreen from '../../faradays-electromagnetic-lab/js/electromagnet/ElectromagnetScreen.js';
import FELPreferences from '../../faradays-electromagnetic-lab/js/common/model/FELPreferences.js';
import FELSim from '../../faradays-electromagnetic-lab/js/common/FELSim.js';
import FELQueryParameters from '../../faradays-electromagnetic-lab/js/common/FELQueryParameters.js';

// The 'Earth' checkbox should be visible by default, unless specified otherwise in the URL.
// See https://github.com/phetsims/faradays-electromagnetic-lab/issues/23
const addEarthCheckbox = QueryStringMachine.containsKey( 'addEarthCheckbox' ) ? FELQueryParameters.addEarthCheckbox : true;

simLauncher.launch( () => {
  const titleStringProperty = MagnetsAndElectromagnetsStrings[ 'magnets-and-electromagnets' ].titleStringProperty;
  const preferences = new FELPreferences( {
    addEarthCheckbox: addEarthCheckbox
  } );
  const screens = [
    new BarMagnetScreen( preferences, Tandem.ROOT.createTandem( 'barMagnetScreen' ) ),
    new ElectromagnetScreen( preferences, Tandem.ROOT.createTandem( 'electromagnetScreen' ) )
  ];
  const sim = new FELSim( titleStringProperty, screens, preferences );
  sim.start();
} );