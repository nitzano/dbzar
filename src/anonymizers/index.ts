
import {FakeAnonymizer} from './fake/fake-anonymizer';
import {FakeOptions} from './fake/fake-options';
import {MaskAnonymizer} from './mask/mask-anonymizer';
import {MaskOptions} from './mask/mask-options';

export type Anonymizer = FakeAnonymizer | MaskAnonymizer;

export type Options = MaskOptions | FakeOptions;
