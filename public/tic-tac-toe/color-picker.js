function app() {
    return {
        colors: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
        variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        currentColor: '',
        iconColor: '',
        isOpen: false,
        initColor () {
            this.currentColor = 'red-800';
            this.setIconWhite();
        },
        setIconWhite () {
            this.iconColor = 'text-white';
        },
        setIconBlack () {
            this.iconColor = 'text-black';
        },
        selectColor (color, variant) {
            this.currentColor = color + '-' + variant;
            if (variant < 500) {
                this.setIconBlack();
            }
            else {
                this.setIconWhite();
            }
        }
    }
}