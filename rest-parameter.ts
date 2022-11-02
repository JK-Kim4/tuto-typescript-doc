function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

//let employeeNameList = buildName('Jone', 'Samuel', 'Lucas', 'Michel')

document.body.textContent = buildNameFun(
  'Jone',
  'Samuel',
  'Lucas',
  'Michel',
  'lalala'
)
