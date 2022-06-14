/*
* This is the Utils file for React JS project that have all commonly used function for a application.
*/


/* 
* Function to delete an item from the array
* @data: Array 
* @deleteItem: Item that have to delete
* @return: Filtered Array
*/
export const deleteFromArray = (data, deleteItem) => {
  if (data && data.length > 0 && deleteItem) {
    return data.filter((item) => item !== deleteItem)
  } else {
    return data
  }
};

/*
* Function to delete an object from the Array of Object by field value
* @data: Array of Object
* @field: key / field name
* @value: value
* @return: Filtered Array
*/
export const deleteObjectFromArrayOfObjects = (data, value, field = 'id') => {
  if (data && data.length > 0) {
    return data.filter((item) => item[field] !== value)
  } else {
    return data
  }
}

/*
* Function to get an object from the Array of Object by field value
* @data: Array of Object
* @field: key / field name
* @value: value
* @return: Filtered Array
*/
export const getObjectFromArrayOfObjects = (data, value, field = 'id') => {
  if (data && data.length > 0) {
    return data.filter((item) => item[field]?.toString() === value?.toString())
  } else {
    return [];
  }
}

// Function to get an object from the array of object by multiple fields
// let filter  = {
//   field: 'value',
// }
export const getObjectFromArrayOfObjectsByFields = (data, filter) => {
  if (Array.isArray(data) && data.length > 0) {
    let newData = [];
    newData = data.filter(function(item) {
      let dcheck = true;
      for (let key in filter) {
        if (item[key]?.toString() !== filter[key]?.toString()) {
          dcheck = false;
        }
      }
      return dcheck;
    });
    return newData.length > 0;
  }
  return false;
} 

export const getObjectFromArrayOfObjectsByFields2 = (data, filter) => {
  if (Array.isArray(data) && data.length > 0) {
    let newData = [];
    newData = data.filter(function(item) {
      let dcheck = true;
      for (let key in filter) {
        if (item[key] !== filter[key]) {
          dcheck = false;
        }
      }
      return dcheck;
    });
    return (newData.length > 0) ? newData : [];
  }
  return [];
} 

/*
* Function to Sort Array of Object by object field
* @data: Array of Object
* @field: key / field name
* @return: Sorted Array of Objects
*/
export const sortArrayObjectByValue = (data, field = 'id') => {
  if (data && data.length > 0) {
    return data.sort((a, b) => {
      return (a[field] > b[field]) ? 1 : -1;
    });  
  } else {
    return data;
  }
}

/*
* Function to get Last Item of an Array
* @return: Last Item
*/
export const getArrayLastItem = (data) => {
  if (data && data.length > 0) {
    return data[data.length - 1];
  } else {
    return false;
  }
}

/*
* Function to get Index of Array Value
* @data: Array / []
* @return: Index
*/
export const getIndexOfArrayValue = (data, value) => {
  if (data && data.length > 0) {
    // return data.indexOf(value);
    return data.findIndex(value);
  } else {
    return -1;
  }
}

/*
* Function to get `Key` by `Value`
* @data: Object
* @value: Value
* @return: Index
*/
export const getKeyByObjectValue = (data, value) => {
  return Object.keys(data).find(key => data[key] === value);
}

/*
* Function to get URL params
* @data: Object
* @value: Value
* @return: Index
*/
export const getURLParams = () => {
  const query = new URLSearchParams(window.location.href);
  return query;
}

/*
* Function to Generate Random String
* @length: Number
* @return: Random String
*/
export const getRandomString = (length = 10) => {
  var result           = '';

  // If the input is not a number
  if(isNaN()) {
    length = parseInt(length);
  }

  if (length > 0) {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
  }

  return result;
}

/*
* Function to get array of object field values
* @key: Object Field / Key
* @return: Simple Array
*/
export const getArrayOfObjectFieldValues = (data, key = 'name') => {
  if (data && data.length > 0) {
    return data.map(item => item[key]);
  } else {
    return [];
  }
}

/*
* Function to get Nessted Array of object field values
* @key: Object Field / Key
* @return: Nested Array
*/
export const convertArrayOfObjectToArrayOfArrays = (data, key = 'name') => {
  let array = data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) { 
      return obj[key];
    });
  });
  return array;
} 

// Table Header to CSV Header
export const getCSVHeader = (data) => {
  let array = [];
  if (data && data.length > 0) {
    data.forEach((item, index) => {
      let hobj = {};
      hobj.label = item.name;
      hobj.key = item.field;
      if (hobj.key !== "select_checkbox" && hobj.key !== "actions") {
        array.push(hobj);
      }
    });
  }
  return array;
}

/*
* Functional Get Label By Value
*/
export const getLabelByValue = (data, id, field = 'id') => {
  let output = '';
  if (data.length > 0) {
    const opobj = getObjectFromArrayOfObjects(data, id, field);
    if (opobj.length > 0 && opobj !== 'undefined') {
      output = opobj['0'].label;
    }
  }
  return output;
}

/*
* Functional Get Value By Label
*/
export const getValueByLabel = (data, id, field = 'id') => {
  let output = '';
  if (data.length > 0) {
    const opobj = getObjectFromArrayOfObjects(data, id, field);
    if (opobj.length > 0 && opobj !== 'undefined') {
      output = opobj['0'].label;
    }
  }
  return output;
}

/*
* Functional Get Already Exists
*/
export const isValueExists = (data, value, field='name') => {
	if (data.length > 0) {
    const res = data.filter((item) => item[field].toLowerCase().trim() === value.toLowerCase().trim());
		if (res.length > 0 && res !== 'undefined') {
			return true;
		}
	}
	return false;
}  

/*
* Functional Get Already Exists Object
*/
export const isValueExistsReturn = (data, value, field='name') => {
	if (data.length > 0) {
		return data.filter((item) => item[field].toLowerCase() === value.toLowerCase());
	}
  return [];
}  

/*
* Functional Check if Value Already Exists by Id
*/
export const isValueAlreadyExists = (data, value, field='name', currentId = '') => {
	if (data.length > 0) {
    const res = data.filter((item) => item[field].toLowerCase().trim() === value.toLowerCase().trim());
    if (res.length > 0 && res !== 'undefined') {
      if (currentId !== "" && currentId === res['0']._id) {
        return false;
      } else {
        return true;
      }
		}
	}
	return false;
}  

/*
* Functional to Show Console on Development Mode
*/
export const showConsole = (params) => {
  if (process.env.REACT_APP_DEBUG_MODE === true) {
    console.log(params);
  }
} 
 
/*
* Function to check if user logged in 
*/ 
export const isUserLoggedIn = () => {
	const token = sessionStorage.getItem("token");
	if (token && token !== '') {
    console.log('User logged in.');
		return true;
	} else {
    console.log('User logged out.');
		return false;
	}
}

/*
* Function to Get Token From The Local Storage
*/
export const getToken = () => {
  let userToken = '';
  const token = sessionStorage.getItem('token');
  if(token) {
    userToken = token.replace(/['"]+/g, ''); 
  } else {
    console.warn('User token not found.');
    userToken = false;
  }
  return userToken;
}

/*
* Function to Get Decoded Token From The Local Storage
*/
export const getDecodedToken = () => {
  let decodedToken = "";

  let token = getToken();
  if (token && token !== '') {
    // decodedToken = jwt_decode(token); 
    // Note: jwt_decode is part of jwt package
  } 
  
  return decodedToken;
}
 
/*
* Function to Get Current User Data
*/
export const getCurrentUser = () => {
	const token = sessionStorage.getItem("token");
	let user = sessionStorage.getItem("user");
	
	if (!user) {
		user = getDecodedToken(token);
	} else {
		user = JSON.parse(user);
	}

	if (user && token && token !== '') {
		return user;
	} else {
		return false;
	}
}

/*
* Function to get Get Access Token
*/
export const getAccessToken = () => {
  const token = sessionStorage.getItem('token');
  if(token) {
    return token.replace(/['"]+/g, ''); 
  } else {
    return false;
  }
}
 
// Get Key by Name
export const getKeyByName = (name, prefix) => {
	let key = '';
	if (name) {
		if (prefix && prefix !=='') {
			key = prefix + name.toLowerCase().trim().replaceAll(' ', '_').replaceAll('-', '_')
		} else {
			key = name.toLowerCase().trim().replaceAll(' ', '_').replaceAll('-', '_')
		}
	}
	return key;
}

// Get Default Object By Value
export const getSumOfDataValues = (data, field = 'sum') => {
	let sum = 0;
	if (data && data.length > 0) {
		data.forEach(item => {
			sum += +item[field] ?? 0;
		})
	}
	return sum;
}

// Check alphanumeric
export const isAlphanumeric = ( str ) => {
	return /^[0-9a-zA-Z]+$/.test(str);
}

// Check Mask Code
export const isMaskCode = ( str ) => {
	return /^([a-zA-Z0-9-]{3,})$/.test(str); 
}

// comma seperated data to dropdown options
export const getOptionsByCommaString = (str) => {
	let output = [];
	if (str && str !== '') {
		const strArray = str.split(',');
		output = strArray.map((item) => ({
			value: item,
			label: item,
			color: "#76AEB7",
		}));
  }
	return output;
} 
 
// open add event link 
// https://calendar.google.com/calendar/u/0/r/eventedit?dates=${event.startDateTime}/${event.endDateTime}&location=${event.location}&text=${event.text}&details=${event.details}
export const addGoogleCalendarEventLink = (event) => {
	let calUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${event.dates}&text=${event.text}&details=${event.details}`;
	window.open(calUrl); // open new tab
}

/*
* Function to Delete Empty Values From Object
* @data: Object
* @return: Filtered Object
*/
export const deleteEmptyValuesFromObject = (data) => {
  for (let propName in data) {
    if (data[propName] === null || data[propName] === 'null' || data[propName] === '' || data[propName] === undefined) {
      delete data[propName];
    }
  }
  return data
}
 
/*
* Function to Delete Duplicate Objects
* @data: Array of Object
* @field: Field / Key
* @return: Filtered Array
*/
export const deleteDuplicateObjectFromArray = (originalArray, field) => {
	var newArray = [];
	var lookupObject  = {};

	for(var i in originalArray) {
		lookupObject[originalArray[i][field]] = originalArray[i];
	}

	for(i in lookupObject) {
		newArray.push(lookupObject[i]);
	}
	
	return newArray;
}

/*
* Function to Get The Last Hightest Value for array of object
* @data: Array of Object
* @field: Field / Key
* @return: Highest Value
*/
export const getLastHighestValue = (data, field = 'id') => {
	let value = 0;
	if (data && data.length > 0) {
		value =	Math.max.apply(Math, data.map(function(o) { return o[field]; }))
	}
	return value;
}
 
/*
* Function to Reset Id / Number on Delete Data
* @data: Array of Object
* @return Updated Array Of Object
*/
export const resetIdArrayOfObjects = (data) => {
	let newData = [];
	if (data && data.length > 0) {
		for (let i = 0; i < data.length; i++) {
			let newObj = Object.assign({}, data[i]);
			newObj.id = i + 1;
			newObj.no = i + 1;
			newData.push(newObj);
		}
		return newData;
	}
	return data;
}
 
/*
* Function to Remove Empty Object From an Array of Object
* @data: Array of Object
* @type: empty
* @return Filtered Array of Objects
*/
export const removeEmptyObjectFromArray = (data, type="empty") => {
	let filteredData = []

	if (data.length > 0 && type === 'empty') {
		filteredData = data.filter(item => {
			if (Object.keys(item).length !== 0) {
				return true;
			}
			return false;
		});
	}

	return filteredData;
}

/*
* Function to Remove Empty Values From Array
* @data: Array
* @return Filtered Array
*/
export const removeEmptyValuesFromArray = (data) => {
	let filteredData = []

	if (data.length > 0) {
		filteredData = data.filter(item => {
			if (item && item !== "") {
				return true;
			}
			return false;
		});
	}

	return filteredData;
}

/*
* Function to Check Valid Email Address
* @email: email
* @return Boolean (true / false)
*/
export const isValidEmail = (email) => {
	if (email && email !== '') {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	} else {
		return false
	}
};

/*
* Function to Check is Valid Date
* @date: date
* @return Boolean (true / false)
*/
export const isValidDate = (date) => {
  let isValid = false;

	if (date && date !== '') {
		let timestamp = Date.parse(date);
		if (!isNaN(timestamp)) {
			isValid = true;
		}
	}

	return isValid;
};

/*
* Function to get Current Date / Time / Date Time
* @type: date / time / datetime
* @return Date | Time | Date Time
*/
export const getCurrentDateTime = (type="date") => {
	let today = new Date();

	if (type === 'date') {
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		return date;
	}
	
	if (type === 'time') {
		let hours = today.getHours();
		let minutes = today.getMinutes();
		let time = hours + ":" + minutes;
		let ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		time = hours + ':' + minutes + ' ' + ampm;
		return time;
	}

	if (type === 'dateTime') {

		// Date
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

		// Time
		let hours = today.getHours();
		let minutes = today.getMinutes();
		let time = hours + ":" + minutes;
		let ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		time = hours + ':' + minutes + ' ' + ampm;

		let dateTime = date +' '+ time;
		return dateTime;
	}

	return today;
}
 
/*
* Function to Check if ISO String Date 2020-05-10T03:20:00Z
* @date: Date
* @return Boolean (true / false) 
*/
export const checkIsISODateFormat = (date) =>  {
	if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)) {
		return false;
	} 

	let d = new Date(date); 
	return d.toISOString() === date;
}

/*
* Function to Convert Date to ISO String Date
* @date: Date - Thu Apr 14 2022 11:37:53 GMT+0530
* @return Date - 2020-05-10T03:20:00Z
*/ 
export const getISOStringDateFromDate = (date) =>  {
	if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)) {
		var d = new Date(date); 
		return d.toISOString();
	}  
	return date;
}


/*
* Function to Convert ISO String 2020-05-10T03:20:00Z format to DD/MM/YYYY
* @date: Date - 2020-05-10T03:20:00Z
* @return Date - DD/MM/YYYY
*/ 
export const getISOStringDateToDate = (date) => {
	let newDate = date;

	let isISODate = checkIsISODateFormat(date);
	if (date !== '' && isISODate) {
		let datetime = new Date(date);
		newDate = datetime.toLocaleDateString('en-GB');
	}
	
	return newDate;
}

/*
* Function to get Date from Date String
* @str: Date String
* @return Date DD/MM/YYYY
*/
export const getDateFromDateString = (str) => {
  const date = new Date(str)
  
  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()
  
  return [day, month, year].join("/");
}

/*
* Function to get totals of array of objects fields
* @data: Array of Object
* @field: Object Field / Key
* @return Total Value
*/
export const getTotalsOfField = (data, field = '') => {
	let totalValue = 0;
	data.forEach((item) => {
		totalValue += parseFloat(item[field]);
	}); 
	return totalValue;
}

// Get Greek Currency Format
export const getGreekCurrencyFormat = (amount = 0) => {

	// Case if the amount is not a number or empty
	if (isNaN(amount) || amount === '') {
		if (amount?.toString().includes("%") || amount?.toString().includes("€")) {
			// Do nothing
		} else {
			amount = 0; // Set zero 
		}
	} else {
		amount = parseFloat(amount).toLocaleString('el-GR', {style:'currency', currency:'EUR'})
	}
	return amount;
}

// Get Multi Select Options to Array
export const getMultiSelectOptionsToArray = (data) => {
	let options = [];
	if (data && data.length > 0) {
		data.forEach((item) => {
			options.push(item.value);
		}); 
	}
	return options;
}

/*
* Get Amount with Vat
* @params amount, vat, vatType (inclusive/exclusive), amountType (per/value)
* @return amount (Float)
*/
export const getAmountWithVat = (amount, vat, vatIncluded = 'false', amountType = 'per') => {
	let amountWithVat = amount;

	// Get Val Type by vat Included 
	// false means exclusive and true means inclusive
	let vatType = 'inclusive';
	if (vatIncluded === 'false') {
		vatType = 'exclusive';
	}

	if (amount && amount !== "" && vat && vat !== '') {
		if (vatType === 'inclusive') {
			return parseFloat(amount);
		} else {
			// Calculate Percentage Vat
			if (amountType) {
				// Exclusive Vat Formula => Amount * (100 + VAT Percentage) / 100 = Amount inclusive of VAT. 
				amountWithVat = parseFloat(amount) * (100 + parseFloat(vat)) / 100;
			}

			// Calculate Value VAT
			if (amountType === 'value') {
				amountWithVat = parseFloat(amount) + (parseFloat(vat) * parseFloat(amount) / 100);
			}
		}
	}

	return parseFloat(amountWithVat);
}

/*
* Function to delete field from the object inside an Array
* @field: Key / Field | data {array of objects}, field {object key}
* @return: Array of Object
*/
export const deleteObjectsFieldFromArray = (data, field = "_id") => {
	let newData = []

	if (data && data.length > 0) {
		data.forEach((item) => {
			if (item[field]) {
				delete item[field]; // Delete Field
			}
			newData.push(item);
		});
	}

	return newData;
}

// It will used on edit pages to manage the changes log
// Get differecene between two objects
// Obj1 is Old Data
// Obj2 is new data
export const getDifferenceBetweenObjects = (obj1, obj2) => {
	let keysFound = [];

	if (obj1 !== null && obj2 !== null && (typeof obj1 == 'object') && (typeof obj2 == 'object')) {

		let obj1Keys = Object.keys(obj1);
		let obj2Keys = Object.keys(obj2);
		let finalObjectkeys = obj2Keys;

		if (obj1Keys.length < obj2Keys.length) {
			finalObjectkeys = obj2Keys;
		}

		// Delete some keys that no need to compare
		let deleteKeys = ['_id', 'created_at', 'update_at', '__v', 'company', 'year', 'type']
		if (deleteKeys && deleteKeys.length > 0) {
			deleteKeys.forEach(field => {
				// Deleting array values
				let foFIndex = finalObjectkeys.indexOf(field);
				if (foFIndex > -1) {
					finalObjectkeys.splice(foFIndex, 1);
				}
			});
		} 

		// Object check top level 1
		finalObjectkeys.forEach(key => {
			if (Array.isArray(obj1[key])) {
				// Inner Array check level 2
				if(JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
					obj1[key].forEach((innerItem, iiIndex) => {
						if(JSON.stringify(innerItem) !== JSON.stringify(obj2[key][iiIndex])) {
							let logChangeMsg = `${key}: => `;
							if (typeof innerItem === 'object') {
									let objVal = getDifferenceBetweenObjects(innerItem, obj2[key][iiIndex]);
									logChangeMsg += `${iiIndex} => ` + objVal;
							} else {
								logChangeMsg += innerItem ? innerItem : 'empty'; // if value of array
							}
							keysFound.push(logChangeMsg);
						}
					});
				}
			} else if (typeof obj1[key] === 'object') {
				// Inner Object Check level 2
				// Object.keys(obj1[key]).forEach((oItem) => {
					if(JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])){
						let logChangeMsg = `${key}: Object fields changed`;
						let objVal = getDifferenceBetweenObjects(obj1[key], obj2[key]);
						logChangeMsg = `${key}: => ` + objVal ? objVal : "empty";
						keysFound.push(logChangeMsg);
					}
				// });
			} else {
				// Field value compare level 1
				if(obj1[key] !== obj2[key]){
					let obj1Val = obj1[key] ? obj1[key] : "empty";
					let obj2Val = obj2[key] ? obj2[key] : "empty";
					let logChangeMsg = `${key}: ${obj1Val} -> ${obj2Val}`;
					keysFound.push(logChangeMsg);
				}
			}
		});

	} else {
		if ((typeof obj1 == 'object') && (typeof obj2 != 'object')) {
			let logChangeMsg = 'Deleted =>' + (getSearchLogFieldsString(obj1));
			keysFound.push(logChangeMsg);
		} else if ((typeof obj1 != 'object') && (typeof obj2 == 'object')) {
			let logChangeMsg = 'Added =>' + (getSearchLogFieldsString(obj2));;
			keysFound.push(logChangeMsg);
		} else {
			console.log('Invalid object found.', obj1, obj2);
		}
	}

	 return keysFound;
};

// Convert Search Log Fields to String
export const getSearchLogFieldsString = (fields) => {
  let fieldsArr = [];
 
	if (fields.company) {
    delete fields.company;
  }

  if (fields.year) {
    delete fields.year;
  }

  if (typeof fields === 'object') {
    Object.keys(fields).forEach((field) => {
      let fieldString = '';

      if (Array.isArray(fields[field])) {
        fieldString = `${field}: ${fields[field].join(', ')}`;
      } else {
        fieldString = `${field}: ${fields[field]}`;
      }

      fieldsArr.push(fieldString);
    }); 
  }

  return fieldsArr.join(', ');
}

/*
* Function get check if Array Item Exists
* @field: Key / Field
* @value: Value
* @return: Boolean (true/false)
*/
export const isAlreadyExists = (data, field, value) => {
	let isExists = false;

	if(Array.isArray(data)) {
		let obj = data.find((item) => item[field]?.toString() === value?.toString());
		if (obj) {
			isExists = true;
		}
	}

	return isExists;
}

/*
* Function get list of email wildcards
* @return: Array of Wildcards
*/
export const EmailWildcardsList = () => {

	let wildCards = [
		"{Name}",
		"{Email}",
		"{Message}",
		"{Address}",
		"{City}",
		"{PostalCode}",
		"{Phone}",
	]

	return wildCards;
}
  
/*
* Function to Check and Return 0 if not a number
* @value: Number
* @field: Field / Item Name
* @return: Number / Zero (0)
*/
export const checkNaN = (value, field = '') => {
  if (isNaN(value)) {
		console.log('Not a valid number: ' + field)
    return 0;
  }
  return value;
}