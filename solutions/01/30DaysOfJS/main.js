const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
  
// 1. Declare an _empty_ array;
const empty_array = []

// 2. Declare an array with more than 5 number of elements
const five_elements = [0,1,2,3,4]

//3. Find the length of your array
const length = five_elements.length
console.log("array: "+ five_elements + "\nlength: " + length)

//4. Get the first item, the middle item and the last item of the array
console.log("first item: " + five_elements[0] +
    "\nmiddle item: " + five_elements[~~(length/2)] +
    "\nlast item " + five_elements[length-1])

//5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
const _mixedDataTypes_ = ["Joao",25,true,"1999-01-02",false]
console.log("array: "+ _mixedDataTypes_ + "\nlength: " + _mixedDataTypes_.length)

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]

//11. Change each company name to uppercase one by one and print them out
const uppercased = itCompanies.map(company => company.toUpperCase());
console.log(uppercased);

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.join(', ')
console.log(sentence)

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
const companyIsPResent = (company) => {
    if (itCompanies.includes(company)) return company
    else return "Company not found."
}
console.log("Google is in array? "+ companyIsPResent("Google"))
console.log("Lenovo is in array? "+ companyIsPResent("Lenovo"))

//14. Filter out companies which have more than one 'o' without the filter method
filtered = []
for (const company of itCompanies) {
    if ((company.match(/o/g)||[]).length<2) filtered.push(company)
}
console.log("filtered: "+filtered)
//15. Sort the array using _sort()_ method
//16. Reverse the array using _reverse()_ method
//17. Slice out the first 3 companies from the array
//18. Slice out the last 3 companies from the array
//19. Slice out the middle IT company or companies from the array
//20. Remove the first IT company from the array
//21. Remove the middle IT company or companies from the array
//22. Remove the last IT company from the array
//23. Remove all IT companies