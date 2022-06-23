class WCA{

    constructor(width, height){

        this.current = [];
        this.previous = [];
        this.width = width;
        this.height = height;
        this.automata = [];
        this.rule = [0,0,0,0,0,0,0,0];
        for(let i=0;i<width;i++){

            this.current[i] = 0;
        }
        this.current[Math.floor(this.width/2)] = 1;
        this.automata[0] = this.current;
        this.gen = 1;
        this.maxGen = height;
    }

    Show(ctx){

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.fillStyle = 'rgb(255, 255, 255)';

        for(let i =0;i < this.automata.length;i++){

            for(let j=0;j < this.width;j++){

                if(this.automata[i][j] == 1)
                    ctx.fillRect(j, i, 1, 1);
            }
        }
    }

    ComputeNextGen(){

        if(this.gen == this.maxGen)
            return;

        this.previous = this.current;
        this.current = [];

        this.current[0] = this.previous[0];
        this.current[this.width - 1] = this.previous[this.width - 1];

        this.automata[this.gen] = [];
        for(let i=1;i<this.width-1;i++){

            this.current[i] = this.ComputeCell(this.previous[i-1], this.previous[i], this.previous[i+1]);
            this.automata[this.gen][i] = this.current[i];
        }
        this.gen++;
    }

    ComputeCell(left, middle, right){

        if(left == 1 && middle == 1 && right == 1) return this.rule[0];
        if(left == 1 && middle == 1 && right == 0) return this.rule[1];
        if(left == 1 && middle == 0 && right == 1) return this.rule[2];
        if(left == 1 && middle == 0 && right == 0) return this.rule[3];
        if(left == 0 && middle == 1 && right == 1) return this.rule[4];
        if(left == 0 && middle == 1 && right == 0) return this.rule[5];
        if(left == 0 && middle == 0 && right == 1) return this.rule[6];
        if(left == 0 && middle == 0 && right == 0) return this.rule[7];
    }

    SetRule(ruleString){

        for(let i=0;i<8;i++){

            this.rule[i] = parseInt(ruleString.charAt(i));
        }
    }

    ResetWithRule(rule){

        this.previous = [];
        for(let i=0;i<width;i++){

            this.current[i] = 0;
        }
        this.current[Math.floor(this.width/2)] = 1;
        this.automata[0] = this.current;
        this.gen = 1;
        this.rule = rule
    }

    ComputeAllGen(){

        for(let i=0;i<this.height;i++){
            this.ComputeNextGen();
        }
    }
}