async function loading() {
  const URL = `https://tempapi.proj.me/api/Z1n5Bqakz`;
  const res = await fetch(`${URL}`);
  console.log(res);

  const data = await res.json();

  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  if (data.Response == "True") {
    // "data.obj" to access the api response array.
    // api is throwing CORS error that's why supposing "obj" in place of original api response array name.
    counts(data.obj);
  }
}

function counts(detail) {
  for (var i = 0; i < detail.length; i++) {
    if (detail[i].egid == "emp1") {
      if (detail[i].date.substring(5, 7) == "02") {
        arr1[0]++;
      } else if (detail[i].date.substring(5, 7) == "03") {
        arr1[1]++;
      } else if (detail[i].date.substring(5, 7) == "04") {
        arr1[2]++;
      }
    } else if (detail[i].egid == "emp2") {
      if (detail[i].date.substring(5, 7) == "02") {
        arr2[0]++;
      } else if (detail[i].date.substring(5, 7) == "03") {
        arr2[1]++;
      } else if (detail[i].date.substring(5, 7) == "04") {
        arr2[2]++;
      }
    } else if (detail[i].egid == "emp3") {
      if (detail[i].date.substring(5, 7) == "02") {
        arr3[0]++;
      } else if (detail[i].date.substring(5, 7) == "03") {
        arr3[1]++;
      } else if (detail[i].date.substring(5, 7) == "04") {
        arr3[2]++;
      }
    }
  }

  const ans = [];
  var j = 0;
  for (var i = 0; i < arr1.length; i++) {
    const emp1 = [];
    emp1[0] = "emp1";
    if (i == 0) {
      emp1[1] = arr1[i];
      emp1[2] = "February";
      ans[j] = emp1;
    } else if (i == 1) {
      emp1[1] = arr1[i];
      emp1[2] = "March";
      ans[j] = emp1;
    } else {
      emp1[1] = arr1[i];
      emp1[2] = "April";
      ans[j] = emp1;
    }
    j++;
  }

  for (var i = 0; i < arr2.length; i++) {
    const emp2 = [];
    emp2[0] = "emp2";
    if (i == 0) {
      emp2[1] = arr2[i];
      emp2[2] = "February";
      ans[j] = emp2;
    } else if (i == 1) {
      emp2[1] = arr2[i];
      emp2[2] = "March";
      ans[j] = emp2;
    } else {
      emp2[1] = arr2[i];
      emp2[2] = "April";
      ans[j] = emp2;
    }
    j++;
  }

  for (var i = 0; i < arr3.length; i++) {
    const emp3 = [];
    emp3[0] = "emp3";
    if (i == 0) {
      emp3[1] = arr3[i];
      emp3[2] = "February";
      ans[j] = emp3;
    } else if (i == 1) {
      emp3[1] = arr3[i];
      emp3[2] = "March";
      ans[j] = emp3;
    } else {
      emp3[1] = arr3[i];
      emp3[2] = "April";
      ans[j] = emp3;
    }
    j++;
  }

  return ans;
}
