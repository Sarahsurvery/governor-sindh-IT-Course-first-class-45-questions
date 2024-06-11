function make_shirt(size: string = "large", message: string = " I love TS"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt();
make_shirt("small");
make_shirt("medium");
make_shirt("large", "print TS");