let articulo = ["the", "our", "my", "your"];
let adjetivo = ["fantastic", "big", "amazing", "coolest"];
let sujeto = ["dog", "kitty", "code", "boyfriend"];


function domainNameGenerator(str1, str2, str3) {
    
for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      for (let k = 0; k < str3.length; k++) {
        let nombreDominio = str1[i] + str2[j] + str3[k] + ".com";
        console.log (nombreDominio);
        
      }
    }
  }
};

domainNameGenerator(articulo, adjetivo, sujeto);