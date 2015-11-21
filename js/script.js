var model = {
    currentCat: null,
    'cats': [
        {
            clickCount: 0,
            name: 'Pudding',
            image: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        },
        {
            clickCount: 0,
            name: 'Waddles',
            image: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        },
        {
            clickCount: 0,
            name: 'Pistache',
            image: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
        },
        {
            clickCount: 0,
            name: 'Micho',
            image: 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480',
        },
        {
            clickCount: 0,
            name: 'Kitty kat',
            image: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        }
    ],
};


var octopus = {

    init: function() {
        model.currentCat = model.cats[0];

        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


var catView = {

    init: function() {
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function() {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.image;
    }
};

var catListView = {

    init: function() {
        this.catListElem = document.getElementById('cat-list');

        this.render();
    },

    render: function() {
        var cat, elem, i;

        var cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];

            elem = document.createElement('li');
            elem.textContent = cat.name;

            console.log(elem);

            elem.addEventListener('click', (function(catCopy){
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        }

    },
};

var adminView = {

    init: function() {
        this.adminElem = document.getElementById('admin');
        this.adminToggleElem = document.getElementById('toggle-admin');

        this.render();
    },

    render: function() {

    }
}

octopus.init();





