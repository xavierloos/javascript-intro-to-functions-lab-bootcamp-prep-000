function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}

<<<<<<< HEAD
if (string == whisper(string)){
    return "I can't hear you!"
  }
  
  if (string == shout(string)){
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma."){
    return "I love you, too."
  }
=======
function sayHiToGrandma(string) {
  var lowercase = "hello"
  if (lowercase.toLowerCase() === lowercase) {
  return "I can\'t hear you!"
  }
  var uppercase = "HELLO!"
  if (uppercase.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
}
function sayHiToGrandma(string) {
 
  var uppercase = "HELLO!"
  if (uppercase.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
}
>>>>>>> ac40883a5aa13036a8c2b52d46a6c78d4b722755
