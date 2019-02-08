export default function validateInput(val, rules) {
  const ruleKeys = Object.keys(rules)
  let valid = false
  
  ruleKeys.forEach((rule) => {

    switch (rule) {

      case 'required':
        valid = val && val.trim().replace(/ /g, '').length
        break
      case 'number':
        valid = !isNaN(parseFloat(val)) && isFinite(val);
        break

    }
  })

  return valid
}