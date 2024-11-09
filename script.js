var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// Listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    //type assertion
    var profilePicInput = document.getElementById('profilepic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var eduactionElement = document.getElementById('eduaction');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //** 
    var usernameElement = document.getElementById("username");
    if (profilePicInput && nameElement && emailElement && phoneElement && eduactionElement && experienceElement && skillsElement && usernameElement) {
        //**** */
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var eduaction = eduactionElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //****** */
        //** */
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, ''), " _cv.html");
        // pic element
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : "";
        var resumeOutput = " \n   <h2>Resume<h2> \n   ".concat(profilepicURL ? "<img src=\"".concat(profilepicURL, " alt=\"profilrpic\" class=\"profilepic\"> ") : "", "\n   <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, " </span> </p>\n   <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n   <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span> </p>\n   \n   <h3> Eduaction</h3>\n   <p id=\"edit-eduaction\" class=\"editable\"> ").concat(eduaction, "</p>\n\n\n   <h3>Experience</h3>\n   <p  id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p>\n\n  <h3> skills</h3>\n   <p  id=\"edit-skills\" class=\"editable\"> ").concat(skills, "</p>\n   ");
        //** */
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        //****** */
        // display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
            // create container for button
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            //add download pdf button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print(); //open the print dialogue allow the user to save as pdf
            });
            buttonsContainer.appendChild(downloadButton);
            //add shareable link button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resume/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            //use clipboard
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            //use clipboard
                            _a.sent();
                            alert("shareable link copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link: ", err_1);
                            alert("Failed to copy link to clipboard. plz try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output containet not found ");
        }
    }
    else {
        console.error("Form element are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
