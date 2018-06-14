/**
 * 基类公共方法定义在该类
 * Creates an instance of BaseClass.
 * @memberof BaseClass
 */

export interface NormalReturnObject {
    success ?: boolean;
    type    ?: string;
    message ?: string;
    result  ?: any;
}

class BaseClass {

    constructor () {}
    
    public test = () => {
        console.log("hello");
    }
}

export default BaseClass;