var $iRnDH$reactjsxruntime = require("react/jsx-runtime");
var $iRnDH$express = require("express");
var $iRnDH$reactdomserver = require("react-dom/server");
var $iRnDH$reactrouterdomserver = require("react-router-dom/server");
var $iRnDH$fs = require("fs");
var $iRnDH$reactrouterdom = require("react-router-dom");
var $iRnDH$react = require("react");
var $iRnDH$reactdom = require("react-dom");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}











const $69ef5b43ec980c7d$var$localCache = {};
function $69ef5b43ec980c7d$export$2e2bcd8739ae039(animal) {
    const [breedList, setBreedList] = (0, $iRnDH$react.useState)([]);
    const [status, setStatus] = (0, $iRnDH$react.useState)("unloaded");
    (0, $iRnDH$react.useDebugValue)("number of values in cache:" + Object.keys($69ef5b43ec980c7d$var$localCache).length);
    (0, $iRnDH$react.useEffect)(()=>{
        if (!animal) setBreedList([]);
        else if ($69ef5b43ec980c7d$var$localCache[animal]) setBreedList($69ef5b43ec980c7d$var$localCache[animal]);
        else requestBreedList();
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            $69ef5b43ec980c7d$var$localCache[animal] = json.breeds || [];
            setBreedList($69ef5b43ec980c7d$var$localCache[animal]);
            setStatus("loaded");
        }
    }, [
        animal
    ]); //any change to animal, useEffect runs again
    return [
        breedList,
        status
    ];
}





const $a7bf7e350f34d6f5$var$Pet = ({ name: name , animal: animal , breed: breed , images: images , location: location , id: id  })=>{
    let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
    if (images.length) hero = images[0];
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $iRnDH$reactrouterdom.Link), {
        to: `/details/${id}`,
        className: "pet",
        children: [
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                    src: hero,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                className: "info",
                children: [
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h1", {
                        children: name
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h2", {
                        children: [
                            animal,
                            " - ",
                            breed,
                            " - ",
                            location
                        ]
                    })
                ]
            })
        ]
    });
};
var // const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };
$a7bf7e350f34d6f5$export$2e2bcd8739ae039 = $a7bf7e350f34d6f5$var$Pet;


const $06f6a128231dfdb9$var$Results = ({ pets: pets  })=>{
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
        children: !pets.length ? /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h1", {
            children: "No pets found"
        }) : pets.map((pet)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $a7bf7e350f34d6f5$export$2e2bcd8739ae039), {
                name: pet.name,
                animal: pet.animal,
                breed: pet.breed,
                images: pet.images,
                location: `${pet.city}, ${pet.state}`,
                id: pet.id
            }, pet.id))
    });
};
var $06f6a128231dfdb9$export$2e2bcd8739ae039 = $06f6a128231dfdb9$var$Results;



// using 'context', we want to mic -- const [theme, setTheme]  = useState('darkblue') --
const $03fbcb125d23c9ac$var$ThemeContext = /*#__PURE__*/ (0, $iRnDH$react.createContext)([
    "green",
    ()=>{}
]);
var $03fbcb125d23c9ac$export$2e2bcd8739ae039 = $03fbcb125d23c9ac$var$ThemeContext;


const $243066060ef4ad3f$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
const $243066060ef4ad3f$var$SearchParams = ()=>{
    const [location, setLocation] = (0, $iRnDH$react.useState)("");
    const [animal, setAnimal] = (0, $iRnDH$react.useState)("");
    const [breed, setBreed] = (0, $iRnDH$react.useState)("");
    const [breeds] = (0, $69ef5b43ec980c7d$export$2e2bcd8739ae039)(animal); // Now you should have breeds being populated every time you change animal!
    const [theme, setTheme] = (0, $iRnDH$react.useContext)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039));
    const [pets, setPets] = (0, $iRnDH$react.useState)([]);
    (0, $iRnDH$react.useEffect)(()=>{
        requestPets();
    }, []); //eslint-disable-line react-hooks/exhaustive-deps
    // [] call this effect again when something happens, [] is either empty or includes dependencies
    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
        className: "search-params",
        children: [
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                },
                children: [
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "location",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("input", {
                                id: "location",
                                value: location,
                                placeholder: "Location",
                                onChange: (e)=>setLocation(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "animal",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("select", {
                                id: "animal",
                                value: animal,
                                onChange: (e)=>{
                                    setAnimal(e.target.value);
                                    setBreed("");
                                },
                                onBlur: (e)=>{
                                    setAnimal(e.target.value);
                                    setBreed("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("options", {}),
                                    $243066060ef4ad3f$var$ANIMALS.map((animal)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "breed",
                        children: [
                            "Breed",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("select", {
                                id: "breed",
                                value: breed,
                                onChange: (e)=>{
                                    setBreed(e.target.value);
                                },
                                onBlur: (e)=>{
                                    setBreed(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("options", {}),
                                    breeds.map((allBreed)=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                            value: allBreed,
                                            children: allBreed
                                        }, allBreed))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("label", {
                        htmlFor: "theme",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("select", {
                                value: theme,
                                onChange: (e)=>setTheme(e.target.value),
                                onBlur: (e)=>setTheme(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "darkblue",
                                        children: "DarkBlue"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "red",
                                        children: "Red"
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("option", {
                                        value: "orange",
                                        children: "Orange"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("button", {
                        style: {
                            backgroundColor: theme
                        },
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $06f6a128231dfdb9$export$2e2bcd8739ae039), {
                pets: pets
            })
        ]
    });
};
var $243066060ef4ad3f$export$2e2bcd8739ae039 = $243066060ef4ad3f$var$SearchParams;







function $03204dbe2679e6fd$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $03204dbe2679e6fd$var$Carousel extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $03204dbe2679e6fd$var$_defineProperty(this, "state", {
            active: 0 //show the first photo
        });
        $03204dbe2679e6fd$var$_defineProperty(this, "handleIndexClick", (event)=>{
            this.setState({
                active: +event.target.dataset.index //+ converts string to the number
            });
        });
    }
    render() {
        const { active: active  } = this.state;
        const { images: images  } = this.props;
        return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
            className: "carousel",
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                    src: images[active],
                    alt: "animal"
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
                    className: "carousel-smaller",
                    children: images.map((photo, index)=>//eslint-disable-next-line
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("img", {
                            onClick: this.handleIndexClick,
                            src: photo,
                            "data-index": index,
                            className: index === active ? "active" : "",
                            alt: "animal thumbnail"
                        }, photo))
                })
            ]
        });
    }
}
$03204dbe2679e6fd$var$_defineProperty($03204dbe2679e6fd$var$Carousel, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ]
});
var $03204dbe2679e6fd$export$2e2bcd8739ae039 = $03204dbe2679e6fd$var$Carousel;





function $e1f82cc8fe3cafbe$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
//Error Boundary has to be done using class component only
class $e1f82cc8fe3cafbe$var$ErrorBoundary extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $e1f82cc8fe3cafbe$var$_defineProperty(this, "state", {
            hasError: false,
            redirect: false
        });
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.error(error, info);
    }
    //equivalent to useEffect in function components
    componentDidUpdate() {
        if (this.state.hasError) setTimeout(()=>this.setState({
                redirect: true
            }), 5000);
    }
    render() {
        if (this.state.redirect) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Navigate), {
            to: "/"
        });
        else if (this.state.hasError) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h2", {
            children: [
                "There was an error.",
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Link), {
                    to: "/",
                    children: "Click here"
                }),
                " to go back to the homepage. Or wait five seconds and we will do it for you."
            ]
        });
        return this.props.children;
    }
}
var $e1f82cc8fe3cafbe$export$2e2bcd8739ae039 = $e1f82cc8fe3cafbe$var$ErrorBoundary;





const $58518334c3599300$var$Modal = ({ children: children  })=>{
    const elRef = (0, $iRnDH$react.useRef)(null);
    if (!elRef.current) elRef.current = document.createElement("div"); //elRef can onyl modify current, can only in the context of elRef.current
    (0, $iRnDH$react.useEffect)(()=>{
        const modalRoot = document.getElementById("modal"); //creating a place for the modal to render, which is later destroyed (created in index.html)
        modalRoot.appendChild(elRef.current);
        return ()=>modalRoot.removeChild(elRef.current); //have to remove the DOM element, otherwise it'll keep re-rendering
    }, []);
    return /*#__PURE__*/ (0, $iRnDH$reactdom.createPortal)(/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("div", {
        children: children
    }), elRef.current);
};
var $58518334c3599300$export$2e2bcd8739ae039 = $58518334c3599300$var$Modal;



function $aad846fad629fe8b$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $aad846fad629fe8b$var$Details extends (0, $iRnDH$react.Component) {
    constructor(...args){
        super(...args);
        $aad846fad629fe8b$var$_defineProperty(this, "state", {
            loading: true,
            showModal: false
        });
        $aad846fad629fe8b$var$_defineProperty(this, "toggleModal", ()=>this.setState({
                showModal: !this.state.showModal
            }));
    }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json();
        this.setState(Object.assign({
            loading: false
        }, json.pets[0])); //can use ...json.pets[0] instead of Object.assign
    }
    //https://reactjs.org/docs/react-component.html#setstate    //toggles the showModal to 'true'
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h2", {
            children: "loading ..."
        });
        // throw new Error("lmao you crashed");
        const { animal: animal , breed: breed , city: city , state: state , description: description , name: name , images: images , showModal: showModal  } = this.state;
        return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
            onClick: (e)=>console.log(e),
            className: "details",
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $03204dbe2679e6fd$export$2e2bcd8739ae039), {
                    images: images
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("h1", {
                            children: name
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h2", {
                            children: [
                                animal,
                                " - ",
                                breed,
                                " - ",
                                city,
                                ", ",
                                state
                            ]
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039).Consumer, {
                            children: ([theme])=>/*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("button", {
                                    onClick: this.toggleModal,
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("p", {
                            children: description
                        }),
                        showModal ? /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $58518334c3599300$export$2e2bcd8739ae039), {
                            children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("h1", {
                                        children: [
                                            "Would you like to adopt name ",
                                            name,
                                            "?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)("div", {
                                        className: "buttons",
                                        children: [
                                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("a", {
                                                href: "https://bit.ly/pet-adopt",
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("button", {
                                                onClick: this.toggleModal,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
}
//to access the API route, we need the 'id' params from the route which is from react-router, so we use 'useParams' to get the 'id', since we cant use 'hooks' in class components
const $aad846fad629fe8b$var$WrappedDetails = ()=>{
    const params = (0, $iRnDH$reactrouterdom.useParams)();
    // const [theme] = useContext(ThemeContext), pass 'theme' props in details
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $e1f82cc8fe3cafbe$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)($aad846fad629fe8b$var$Details, {
            params: params
        })
    });
};
var $aad846fad629fe8b$export$2e2bcd8739ae039 = $aad846fad629fe8b$var$WrappedDetails;



const $68331e6bae88c443$var$App = ()=>{
    const theme = (0, $iRnDH$react.useState)("darkblue");
    return /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$react.StrictMode), {
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $03fbcb125d23c9ac$export$2e2bcd8739ae039).Provider, {
            value: theme,
            children: [
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)("header", {
                    children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Link), {
                        to: "/",
                        children: "Adopt Me!"
                    })
                }),
                /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsxs)((0, $iRnDH$reactrouterdom.Routes), {
                    children: [
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Route), {
                            path: "/details/:id",
                            element: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $aad846fad629fe8b$export$2e2bcd8739ae039), {})
                        }),
                        /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdom.Route), {
                            path: "/",
                            element: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $243066060ef4ad3f$export$2e2bcd8739ae039), {})
                        })
                    ]
                })
            ]
        })
    });
};
var // const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };
$68331e6bae88c443$export$2e2bcd8739ae039 = $68331e6bae88c443$var$App;


const $1e2dbfa8b3df4ac0$var$PORT = process.env.PORT || 3000;
const $1e2dbfa8b3df4ac0$var$html = (0, ($parcel$interopDefault($iRnDH$fs))).readFileSync("dist/frontend/index.html").toString();
const $1e2dbfa8b3df4ac0$var$parts = $1e2dbfa8b3df4ac0$var$html.split("not rendered"); //splits the html file from line 1-14, and line 15-18 (includes </div> on line 14
const $1e2dbfa8b3df4ac0$var$app = (0, ($parcel$interopDefault($iRnDH$express)))();
$1e2dbfa8b3df4ac0$var$app.use("/frontend", (0, ($parcel$interopDefault($iRnDH$express))).static("dist/frontend"));
$1e2dbfa8b3df4ac0$var$app.use((req, res)=>{
    const reactMarkup = /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $iRnDH$reactrouterdomserver.StaticRouter), {
        location: req.url,
        children: /*#__PURE__*/ (0, $iRnDH$reactjsxruntime.jsx)((0, $68331e6bae88c443$export$2e2bcd8739ae039), {})
    });
    res.send($1e2dbfa8b3df4ac0$var$parts[0] + (0, $iRnDH$reactdomserver.renderToString)(reactMarkup) + $1e2dbfa8b3df4ac0$var$parts[1]); //server side rendering
    res.end();
});
$1e2dbfa8b3df4ac0$var$app.listen($1e2dbfa8b3df4ac0$var$PORT, ()=>console.log(`Listening on http://localhost:${$1e2dbfa8b3df4ac0$var$PORT}`));


//# sourceMappingURL=index.js.map
