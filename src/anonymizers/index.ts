import {FakeAnonymizer} from './fake/fake-anonymizer';
import {FakeOptions} from './fake/fake-options';
import {MaskAnonymizer} from './mask/mask-anonymizer';
import {MaskOptions} from './mask/mask-options';
import {ScrambleAnonymizer} from './scramble/scramble-anonymizer';

export type Anonymizer = FakeAnonymizer | MaskAnonymizer | ScrambleAnonymizer;

export type Options = MaskOptions | FakeOptions;
