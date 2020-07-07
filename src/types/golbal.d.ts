interface MyArray extends Array<any> {
    [method: string]: any;
}

type OberserData = Object | Array<any>;

type CallBacks = Array<() => any>;
