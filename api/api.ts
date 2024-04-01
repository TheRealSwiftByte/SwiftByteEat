import { ApiImplementationFactory } from './ApiImplementationFactory';
import { ApiStubFactory } from './ApiStubFactory';

export class Api {
    private static _api: Api;
    private factory: ApiImplementationFactory;

    constructor() {
        this.factory = new ApiStubFactory();
        this.factory.initialise();
    }
    
    
}