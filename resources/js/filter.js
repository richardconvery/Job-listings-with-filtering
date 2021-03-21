let data = ["CSS", "Django", "Frontend", "HTML", "JavaScript", "Junior", "Python", "React", "RoR", "Ruby", "Sass", "Senior", "Vue"]; // Programatically-generated options array with > 5 options
let placeholder = "select";
$(".mySelect").select2({
    data: data,
    placeholder: placeholder,
    allowClear: true,
    minimumResultsForSearch: 5
});