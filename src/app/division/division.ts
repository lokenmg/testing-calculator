export function division(oper1, oper2) {
    // refactoring
    let div=0;
    if (oper2==0){
      return 0;
    }else{
       div = oper1 / oper2;
    }
    return div;
}
