const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shuffle(txtElement, word) {
    return new Promise((resolve, reject) => {
        let iteration = 0;
        const interval = setInterval(() => {
            console.log("inside set interval");
            txtElement.innerText = txtElement.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return word[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if (iteration >= word.length) {
                resolve();
                clearInterval(interval);
            }
            iteration += 1;
        }, 80);
    });
}

const PreLoader = function (txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.wordIndex = -1;
    this.wait = parseInt(wait, 10);
    this.call_function();
};

PreLoader.prototype.call_function = function () {
    if (this.wordIndex < this.words.length) {
        if (this.wordIndex >= 0) {
            shuffle(this.txtElement, this.words[this.wordIndex]).then(() => {
                console.log(this.words[this.wordIndex]);
            });
        }
        this.wordIndex += 1;
        setTimeout(() => this.call_function(), this.wait);
    } else {
        // document.querySelector(".preloader").style.transform =
        //     "translateY(-100%)";
    }
};

export default PreLoader;
