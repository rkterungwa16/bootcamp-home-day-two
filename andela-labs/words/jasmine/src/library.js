function words (mString) {
	var mObj = {};
	var mArray = mString.split(/\s/);
	for (var i=0; i<mArray.length; i++) {
		if (mArray[i].length === 0) {
			mObj;
		}
		else if (!(mArray[i] in mObj)) {

			mObj[mArray[i]] = 1;
		}

		else {
			mObj[mArray[i]] += 1;
		}
	}
	return mObj;
}