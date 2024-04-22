let myResume = {
    "name": "gowtham",
    "age": 27,
    "address": {
        "city": "sankarankovil",
        "state": "tamilnadu",
        "village": "mullikkulam",
        "taluk": "kadayanallur",
        "pincode": 627755
    },
    "languagesKnown": ["tamil", "english"],
    "educationalQualification": "B.E mechanical",
    "yearOfPassing": 2019,
    "collegeName": "psr engg college",
    "collegePlace": "sivakasi",
    "CGPA": 65,
    "schoolName": "HNUC HR SEC SCHOOL",
    "extraCurricularActivities": ["cricket"],
    "maritalStatus": "single"
};

for (let key in myResume) {
    console.log(key + ": " + myResume[key]);
}
