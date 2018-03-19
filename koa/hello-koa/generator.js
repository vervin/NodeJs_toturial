function* hello(){
    yield 'hello';
    yield 'world';
    return 'ending';

}
var hw = hello();
hw.next()
hw.next()
hw.next()
