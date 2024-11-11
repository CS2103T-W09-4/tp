
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"dormanagerpro-developer-guide"}},[_v("DorManagerPro Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dormanagerpro-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("GitHub copilot was used by Li Yifeng as an auto-complete tool during most of the coding")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person). Certain types of commands (FileAccessCommand) can also communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" when it is executed."),_c('br'),_v("\nNote that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(") to achieve.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("stores a history of undoable commands executed successfully by the user, which allows the user to undo commands.")]),_v(" "),_c('li',[_v("only depends on the Logic component due to the undo feature.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-feature"}},[_v("Add feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" and implements "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command adds a contact based on the supplied parameters, of which\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v(" are compulsory while "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ROOM_NUMBER")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAG")]),_v(" are optional.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command is undoable.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario and how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command behaves at each step.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/+65 98765432 e/johnd@example.com r/01-1008 a/John street t/Floor 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command adds a contact with the name John Doe, phone number +65 98765432, email "),_c('a',{attrs:{"href":"mailto:johnd@example.com"}},[_v("johnd@example.com")]),_v(", room number #01-1008, address John street, tag \"Floor 1\" to the address book.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram summarizes what happens when a user executes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-feature"}},[_v("Edit feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" and implements "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command updates an existing contact based on the supplied index and parameters, of which\nonly the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" supplied, as well as any one field to update is compulsory.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command is undoable.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario and how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command behaves at each step.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/John Doe p/+65 98765432")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command updates the details of the contact with index 1 to have the name John Doe and phone number +65 98765432.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram summarizes what happens when a user executes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo-feature"}},[_v("Undo feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The undo mechanism is facilitated by the interface "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(".\nIt has the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method is called when the user executes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method reverses the effects of the command that was previously executed.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method is implemented in the undoable command classes, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommand")]),_v(", etc.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component stores a history of executed undoable commands in a stack.\nWhen a command is executed successfully, the command is pushed onto the stack.\nWhen the user executes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component pops the last command from the stack and calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method of the command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("These operations are exposed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" interface as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#pushToUndoStack()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 5")]),_v(" command to delete the 5th person in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command is pushed onto the undo stack.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David …​")]),_v(" to add a new person. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command is also pushed onto the undo stack.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(", which will pop the last command from the undo stack and call its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo()")]),_v(" method of the command will then reverse the effects of the command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similarly, how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user then decides to execute the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(". Commands that do not modify the address book, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", will not be pushed to the undo stack. Thus, the undo stack remains unchanged.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", which is pushed to the undo stack.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How undo executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1:")]),_v(" Saves the entire address book.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May have performance issues in terms of memory usage.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2 (current implementation):")]),_v(" Individual command knows how to undo by itself.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Will use less memory (e.g. for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", just save the person being deleted).")]),_v(" "),_c('li',[_v("Cons: We must ensure that the implementation of each individual command are correct.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clean-feature"}},[_v("Clean feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clean-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-5"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" and implements "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command deletes the contacts whose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GradYear")]),_v(" field is earlier\nthan the current year, deleting contacts who have graduated from the address book.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command is undoable.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario and how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command behaves at each step.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" in 2024.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command deletes all contacts with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GradYear")]),_v(" 2023 or earlier.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram summarizes what happens when a user executes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-2"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: UI display when "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" executes after a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1:")]),_v(" Display all contacts.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Shows users the full result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(".")]),_v(" "),_c('li',[_v("Cons: Forgets the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2 (current implementation):")]),_v(" Retain the search results of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" and only display those contacts.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Allow users to retain their serach results from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(".")]),_v(" "),_c('li',[_v("Cons: Users cannot see the full extent of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" until they return to the default view with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(".")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"update-find-command"}},[_v("Update Find Command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#update-find-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-6"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("the findCommand is enhanced by new Predicates")]),_v(" "),_c('li',[_v("RoomNumber predicates, PhonePredicate, and TagContainsKeywordsPredicate allows\nthe a wider range of searching based on more features")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user issues a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command followed by specific parameters,\nfor example: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friends n/Alex r/08-0805 p/9124 6892")]),_v(", searches for a profile with a\ntag of friends, a name called Alex, a roomNumber of 08-0805, and a phone call of 9124 6842")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Note")]),_v(" : These parameters can be combined in any sequence, allowing for versatile parameter configurations.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The parser interprets the user command and constructs corresponding predicates for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(" object.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(" get executed and updates the filteredPersonList within the model, reflecting the search")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"export-feature"}},[_v("Export feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"implementation-7"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1: The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2: The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" command exports all data currently contained by DorManagerPro to a JSON file in the data folder.\nThe name of the JSON file is the time of export.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"design-considerations-3"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("**Aspect: The name of the JSON file on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1:")]),_v(" Use a generic format such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SAVE_FILE_1")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SAVE_FILE_2")])]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy for the user to know at first glance which save file was created latest as well as the chronological order of their creation.")]),_v(" "),_c('li',[_v("Cons: Does not tell the user at what time they actually exported the save file or contents of the save file.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2 (current implementation):")]),_v(" The time of the device's system at the moment of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")])]),_v(" "),_c('ul',[_c('li',[_v("Pros: Allows for pinpoint of exact save files as no two files can be exported at the same time.")]),_v(" "),_c('li',[_v("Cons: Takes longer to manually understand the name of the save file when trying to locate a specific one,\nespecially when multiple "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exports")]),_v(" happen within a short period of time. Also has no mention of contents of JSON file.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 3:")]),_v(" A brief summary of the file such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FIRST-Alex_Jones LENGTH-20")])]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy for the user to know at first glance which save file contains what.")]),_v(" "),_c('li',[_v("Cons: Does not tell the user at what time they actually exported the save file. Also has no indication of the\nchronology of creation of the files, and hence no information on which file was the last to be created. Additionally,\nit would become complicated when exporting files with similar data.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"import-feature"}},[_v("Import feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#import-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"implementation-8"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-8","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" command implements "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" command deletes the contacts whose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GradYear")]),_v(" field is earlier\nthan the current year, deleting contacts who have graduated from the address book.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command is undoable.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario and how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" command behaves at each step.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data/SaveFile3.json")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"design-considerations-4"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: The exact format of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FILE_PATH")]),_v(" parameter")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1:")]),_v(" Take in only the name of the JSON file in the data folder of the home folder.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Shorter command for the user to type. It is also considerably less complicated than alternative 2, making it more accessible to non-technical users.")]),_v(" "),_c('li',[_v("Cons: Limits the ability of import to only the contents of the data folder. Also requires user to move any JSON file they may want to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" into the data folder.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2 (current implementation):")]),_v(" Require the user to type in the full file path of the JSON file they wish to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Allow greater flexibility for user to import JSON files from any location of the device.")]),_v(" "),_c('li',[_v("Cons: Significantly longer command for the user to type. Requires user to have prior knowledge of what the JSON's filepath is, increasing complexity.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"delete-command"}},[_v("Delete Command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-9"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-9","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" and implements "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(".")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command is based on the index of the contact.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user input a delete command followed by an index,\nfor example: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(", delete the contact with an index of 1.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The parser parses the input command and returns a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(" is executed by the LogicManager and delete popup get displayed.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(": University dormitory manager (teacher residents or admins at Dorm Halls)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("has a need to manage a significant number of student contacts")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("has experience and prefers using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(": Provide fast and centralised access to vital resident information.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("keeps track of residents' contact details")]),_v(" "),_c('li',[_v("manages room number and roles of residents")]),_v(" "),_c('li',[_v("allows for quick input of details and querying by different conditions for dorm managers of large dorms.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Priorities: High (must have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")]),_v(", Medium (nice to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")]),_v(", Low (unlikely to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("forgetful dorm manager")]),_v(" "),_c('td',[_v("see usage instructions")]),_v(" "),_c('td',[_v("refer to instructions when I forget how to use the App")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("add a new contact")]),_v(" "),_c('td',[_v("keep track of students in my dorm")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("delete a contact")]),_v(" "),_c('td',[_v("remove entries when residents leave the dorm to prevent clutter")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("view contacts")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("see emergency contacts of my residents")]),_v(" "),_c('td',[_v("act quickly in the event of an emergency")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("strict dorm manager")]),_v(" "),_c('td',[_v("know my residents' room number")]),_v(" "),_c('td',[_v("go check on them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("bustling dorm manager")]),_v(" "),_c('td',[_v("find a contact by their details (eg. name, room)")]),_v(" "),_c('td',[_v("locate contacts without having to go through the entire list")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("edit a contact")]),_v(" "),_c('td',[_v("update contact details")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("clumsy dorm manager")]),_v(" "),_c('td',[_v("undo my actions")]),_v(" "),_c('td',[_v("restore information if I accidentally delete them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("give roles (responsibilities) to my residents")]),_v(" "),_c('td',[_v("foster communal living")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("forgetful dorm manager")]),_v(" "),_c('td',[_v("keep track of the roles of my residents (eg. RA, CCA leader)")]),_v(" "),_c('td',[_v("know their responsibilities")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("find residents with certain roles (eg. RA, CCA leader)")]),_v(" "),_c('td',[_v("view and contact them as a group")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("impatient dorm manager")]),_v(" "),_c('td',[_v("load / save all resident details to a file")]),_v(" "),_c('td',[_v("avoid typing in each resident's details")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("sort contacts by name, room number")]),_v(" "),_c('td',[_v("locate a contact easily")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("forgetful dorm manager")]),_v(" "),_c('td',[_v("search by partial matches")]),_v(" "),_c('td',[_v("find contacts without memorising their full name")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("neat dorm manager")]),_v(" "),_c('td',[_v("group residents by block, floor, cluster, year")]),_v(" "),_c('td',[_v("keep contacts organised in specific groups")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("filter search results by roles or groups")]),_v(" "),_c('td',[_v("find contacts in specific groups quickly")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("view a summary of resident groups")]),_v(" "),_c('td',[_v("get an overview of the dorm population")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("keep track of demerit points of my residents")]),_v(" "),_c('td',[_v("evict them when needed")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("anxious dorm manager")]),_v(" "),_c('td',[_v("know the phone, email and home address of my residents")]),_v(" "),_c('td',[_v("contact residents through multiple channels in case they don't respond")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("thoughtful dorm manager")]),_v(" "),_c('td',[_v("know the major of my residents")]),_v(" "),_c('td',[_v("provide care and support during stressful periods")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("wholesome dorm manager")]),_v(" "),_c('td',[_v("know the clubs of my residents")]),_v(" "),_c('td',[_v("support their arts showcases / sports competitions")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("enthusiastic dorm manager")]),_v(" "),_c('td',[_v("know the food preferences of my residents")]),_v(" "),_c('td',[_v("prepare welfare packs for them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("know the medical conditions of my residents")]),_v(" "),_c('td',[_v("provide timely medical assistance")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("know the nationality of my residents")]),_v(" "),_c('td',[_v("better respect their culture")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("thoughtful dorm manager")]),_v(" "),_c('td',[_v("add a small description of each resident")]),_v(" "),_c('td',[_v("note the quirks and interests of each resident")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("dorm manager")]),_v(" "),_c('td',[_v("keep the commands short and powerful")]),_v(" "),_c('td',[_v("use it effectively with CLI experience")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DorManagerPro")]),_v(", and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user")]),_v(" who refers to university dormitory managers unless specified otherwise.)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC01 - Add a profile")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to add a specific profile, specifying name, contact number and email address.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro adds the profile.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1c. DorManagerPro detects that the specified profile already exists.")]),_v(" "),_c('ul',[_c('li',[_v("1c1. DorManagerPro informs the user and asks for another profile to add.")]),_v(" "),_c('li',[_v("1c2. User specifies another profile to add.")])]),_v(" "),_c('p',[_v("Steps 1c1-1c2 are repeated until a valid profile is indicated.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1d. DorManagerPro detects invalid parameters specified by user.")]),_v(" "),_c('ul',[_c('li',[_v("1d1. DorManagerPro requests for valid parameters.")]),_v(" "),_c('li',[_v("1d2. User re-supplies parameters.")])]),_v(" "),_c('p',[_v("Steps 1d1-1d2 are repeated until the parameters are valid.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop adding a profile.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC02 - Edit profile")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is at least one profile added into DorManagerPro.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to edit or add additional information for a specific profile. This can be the name, phone number, email address, address, emergency contact details, graduation year or tags.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro updates the profile with the new or updated information.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1b. DorManagerPro cannot find the specified profile to update.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. DorManagerPro requests for a profile that exists to update.")]),_v(" "),_c('li',[_v("1b2. User specifies profile again.")])]),_v(" "),_c('p',[_v("Steps 1b1-1b2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1c. DorManagerPro detects invalid parameters specified by user.")]),_v(" "),_c('ul',[_c('li',[_v("1c1. DorManagerPro requests for valid parameters.")]),_v(" "),_c('li',[_v("1c2. User re-supplies parameters.")])]),_v(" "),_c('p',[_v("Steps 1c1-1c2 are repeated until the parameters are valid.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop editing.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC03 - Delete all graduated students")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is at least one graduated student profile added into DorManagerPro.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to delete all graduated students from the DorManagerPro address book.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro deletes all students with graduation years earlier than the current year.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1b. DorManagerPro cannot find any students who have graduated.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. DorManagerPro displays an error message informing the user all students in the address book have yet to graduate.")])]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop deleting all graduated students.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC04 - View profiles")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is at least one profile added into DorManagerPro.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to view all profiles.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro displays all profiles.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to view certain profiles based on the profiles features (tags, roomNumber, number, name).")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro displays all profiles with all attached information.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("3a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("3a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("3a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 3a1-3a2 are repeated until the command is correct.\nUse case resumes from step 4.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop viewing a profile.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC05 - Delete a profile")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is at least one profile added into DorManagerPro.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to delete a specific profile.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro asks if user to confirm they want to delete the profile.")])]),_v(" "),_c('li',[_c('p',[_v("User confirms.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro deletes the profile.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1b. DorManagerPro cannot find the specified profile to delete.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. DorManagerPro requests for a profile that exists to delete.")]),_v(" "),_c('li',[_v("1b2. User specifies profile again.")])]),_v(" "),_c('p',[_v("Steps 1b1-1b2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1c. DorManagerPro detects invalid parameters specified by user.")]),_v(" "),_c('ul',[_c('li',[_v("1c1. DorManagerPro requests for valid parameters.")]),_v(" "),_c('li',[_v("1c2. User re-supplies parameters.")])]),_v(" "),_c('p',[_v("Steps 1c1-1c2 are repeated until the parameters are valid.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("2a. User expresses they do not want to delete the profile after all.")]),_v(" "),_c('ul',[_c('li',[_v("2a1. DorManagerPro acknowledges the rejection.")])]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop deleting a profile.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC06 - Undoing an action")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is at least one undoable action in the current session of DorManagerPro that has yet to be undone.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to undo the latest undoable action.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro restores the app to the state it was before the latest undoable action was carried out.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1b. DorManagerPro detects that there are no undoable actions in the current session of DorManagerPro that has yet to be undone.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. DorManagerPro displays an error message informing the user that there are no undoable actions.")])]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop undoing an action.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC07 - Exporting the current data")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to export the current data.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro exports the current data to a json file.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop exporting the current data.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Case: UC08 - Importing data from a json file")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Precondition: There is a json file in the valid format required to load to the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to import data from a json file, specifying a file path to the json file.")])]),_v(" "),_c('li',[_c('p',[_v("DorManagerPro displays all profiles loaded from the imported json file.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. DorManagerPro detects an error in the command format.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. DorManagerPro requests for the correct command format.")]),_v(" "),_c('li',[_v("1a2. User enters command again.")])]),_v(" "),_c('p',[_v("Steps 1a1-1a2 are repeated until the command is correct.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("1b. DorManagerPro detects an invalid file path or file format specified by user.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. DorManagerPro requests for valid file path.")]),_v(" "),_c('li',[_v("1b2. User re-supplies file path.")])]),_v(" "),_c('p',[_v("Steps 1b1-1b2 are repeated until the parameters are valid.\nUse case resumes from step 2.")])]),_v(" "),_c('li',[_c('p',[_v("*a. At any time, User chooses to stop importing.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should work on Mac as long as javafx and java '17' both installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e., not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("Should take less than 1000 milliseconds to finish every command operation.")]),_v(" "),_c('li',[_v("Should take less 1 gigabyte of storage.")]),_v(" "),_c('li',[_v("Should be able to work offline.")]),_v(" "),_c('li',[_v("A new user should be able to be reasonably familiar with the commands within 30 minutes.")]),_v(" "),_c('li',[_v("DorManagerPro should support all input in English and not other languages.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, MacOS")]),_v(" "),_c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")]),_v(" "),_c('li',[_c('strong',[_v("Dorm")]),_v(": A university or college hall of residence / hotel for students and teachers")]),_v(" "),_c('li',[_c('strong',[_v("Dorm resident")]),_v(": Student and / or teacher currently staying in a dorm")]),_v(" "),_c('li',[_c('strong',[_v("Dorm manager")]),_v(": User of DorManagerPro that has to keep track of the residents in their dorm")]),_v(" "),_c('li',[_c('strong',[_v("Profile")]),_v(": Collection of information related to a resident that serves as a block of interrelated data in DorManagerPro. Consists of name, contact number, room number, and emergency contact.")]),_v(" "),_c('li',[_c('strong',[_v("Emergency contact")]),_v(": Person to contact when the resident related to said contact gets into an emergency (injury, immigration related issues etc.). Consists of a name and contact number.")]),_v(" "),_c('li',[_c('strong',[_v("Dorm room")]),_v(": Rooms of the dorm where residents stay in. Corresponds to a floor and unit number that specify its location.")]),_v(" "),_c('li',[_c('strong',[_v("Graduation Year")]),_v(": The year during which the student will graduate.")]),_v(" "),_c('li',[_c('strong',[_v("File path")]),_v(": The path to the file. Is considered to be the location of the file. Can often be found by right-clicking the file as an option in the menu.")]),_v(" "),_c('li',[_c('strong',[_v("JSON")]),_v(": A type of file like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdf")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docx")]),_v(" that is often used for data storage.")]),_v(" "),_c('li',[_c('strong',[_v("Parameter")]),_v(": A value / characteristic used by a feature that is often defined by the feature, or otherwise by the real world.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be optimum.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-person"}},[_v("Deleting a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting a person while all persons are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. Multiple persons in the list.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_c('br'),_v("\nExpected: Delete popup shows up. After confirming on the popup, first contact is deleted from the list. Details of the deleted contact shown in the status message.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_c('br'),_v("\nExpected: No person is deleted. Error details shown in the status message.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size)"),_c('br'),_v("\nExpected: Similar to previous.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"finding-a-person"}},[_v("Finding a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Finding with parameters missing.\n"),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown stating that the command format is incorrect and showing the user the correct format.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find t/")]),_v(" "),_c('br'),_v("\nExpected: Listing out everyone is the contact list.")])])]),_v(" "),_c('li',[_v("Finding a person with all possible parameters specified.\n"),_c('ol',[_c('li',[_v("Prerequisites: There is a contact in the list with a name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(", a phone number of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("98765432")]),_v(", a room number of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("08-0805")]),_v(", and a tag of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friends")]),_v(".")]),_v(" "),_c('li',[_v("Test case:  "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/John Doe p/98765432 r/08-0805 t/friends")]),_v(" "),_c('br'),_v("\nExpected: Displaying the contact with name John Doe, a phone number of 98765432, and living in room in the room 08-0805, and has a tag of friends.")])])]),_v(" "),_c('li',[_v("Finding a person with parameter that does not conform to data validation.\n"),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/John Doe p/abcd")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for PHONE.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/John Doe r/abcd")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for ROOM_NUMBER.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Dealing with missing/corrupted data files\n"),_c('ol',[_c('li',[_v("Test case: Edit a record of a person in DorManagerPro.json to have a name containing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/")]),_v(", which is an invalid character in DorManagerPro. "),_c('br'),_v("\nExpected: On launch, the application has no contacts as it does not read files that contain invalid data.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exporting-data"}},[_v("Exporting data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exporting-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Exporting a contact list with one or more contacts.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is at least one person in DorManagerPro")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" "),_c('br'),_v("\nExpected: A json file is exported to the data folder of the application, with the name of the json file being the time of export.")]),_v(" "),_c('li',[_v("More positive tests can be done for different numbers of people in DorManagerPro")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"importing-data"}},[_v("Importing data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importing-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Importing a json file with valid data")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is a json file with valid data in the device. In this case, it is assumed the file path to the json file is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./data/SaveFile.json")]),_v(".")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data/SaveFile.json")]),_v(" "),_c('br'),_v("\nExpected: The contents of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SaveFile.json")]),_v(" is loaded into DorManagerPro.")])])]),_v(" "),_c('li',[_c('p',[_v("Importing a json file with invalid data")]),_v(" "),_c('ol',[_c('li',[_v("Prequisites: There is a json file with invalid data in the device. In this case, it is assumed the file path to the json file is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./data/SaveFile.json")]),_v(".")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data/SaveFile.json")]),_v("\nExpected: No information is imported into DorManagerPro. Error details shown in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Importing a file that is not of json format")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is a file not of json format on the device. In this case, it is assumed the file path to this file is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./data/text")]),_v(".")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data/text")]),_v("\nExpected: Same as above.")])])]),_v(" "),_c('li',[_c('p',[_v("Importing a folder")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is a folder on the device. In this case, it is assumed the file path to this file is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./data")]),_v(".")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data")]),_v("\nExpected: Same as above.")])])]),_v(" "),_c('li',[_c('p',[_v("Trying to import a file that does not exist on the device")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import fp/./data/SaveFile4.json")]),_v(" where SaveFile4.json does not exist on the device "),_c('br'),_v("\nExpected: Same as above, with error message now instead specifying that the file path must correspond to an existing system path.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-person"}},[_v("Adding a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Adding a person with only compulsory parameters specified.")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com")]),_v(" "),_c('br'),_v("\nExpected: John Doe is added to the address book with a success message, as shown below.\n"),_c('a',{attrs:{"href":"/tp/images/AddCommandTestSuccessMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/AddCommandTestSuccessMessage.png","alt":"add success"}})])])])]),_v(" "),_c('li',[_c('p',[_v("Adding a person with all possible parameters specified.")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com r/05-0523 a/311, Clementi Ave 2, #02-25 t/Floor10 t/Table Tennis t/Floor 5")]),_v(" "),_c('br'),_v("\nExpected: John Doe is added to the address books with all the other details and a success message.")])])]),_v(" "),_c('li',[_c('p',[_v("Adding a person with some compulsory parameters missing.")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown stating that the command format is incorrect and showing the user the correct format.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe e/johnd@example.com r/05-0523 a/311, Clementi Ave 2, #02-25 t/Floor10 t/Table Tennis t/Floor 5")]),_v(" "),_c('br'),_v("\nExpected: Similar to (i).")])])]),_v(" "),_c('li',[_c('p',[_v("Adding a person with data that does not conform to data validation.")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/abcd e/johnd@example.com")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for PHONE.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/1234567 e/HAI")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for EMAIL.")])])]),_v(" "),_c('li',[_c('p',[_v("Adding a person with duplicate phone.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is at least one person in the address book.")]),_v(" "),_c('li',[_v("Test case:\n"),_c('ol',[_c('li',[_v("Step 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/12345678 e/johnd@example.com")]),_v(" "),_c('br')]),_v(" "),_c('li',[_v("Step 2: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Alex Yeoh p/12345678 e/heyhey@example.com")]),_v(" "),_c('br'),_v("\nExpected: An error message appears informing the user that there is already someone with that phone number in the address book.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-person"}},[_v("Editing a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Editing a person with only some optional parameters specified.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is at least one person in the address book and edit will not result in duplicates.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/John Doe")]),_v(" "),_c('br'),_v("\nExpected: The name of the first person in the address book is changed to John Doe. Success message shown in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Editing a person with all possible parameters specified.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is at least one person in the address book and edit will not result in duplicates.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/John Doe p/98765432 e/johndoe@example.com r/05-0523 a/311, Clementi Ave 2, #02-25 en/Bob ep/12346789 g/2020 t/Floor10")]),_v(" "),_c('br'),_v("\nExpected: The first person in the address book is updated with the new details. Success message shown in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Editing a person with data that does not conform to data validation.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There is at least one person in the address book.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/abcd")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for PHONE.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 e/HAI")]),_v(" "),_c('br'),_v("\nExpected: An error message is shown informing the user about the correct data format for EMAIL.")])])]),_v(" "),_c('li',[_c('p',[_v("Editing a person with duplicate phone.")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: There are at least two persons in the address book.")]),_v(" "),_c('li',[_v("Test case:\n"),_c('ol',[_c('li',[_v("Step 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/12345678")]),_v(" "),_c('br')]),_v(" "),_c('li',[_v("Step 2: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 p/12345678")]),_v(" "),_c('br'),_v("\nExpected: An error message appears informing the user that there is already someone with that phone number in the address book.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo-a-command"}},[_v("Undo a command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo-a-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Undoing a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: The previous successfully executed command is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_c('br'),_v("\nExpected: The previous deletion is reverted. Details of the restored contact shown in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Undoing a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: The previous successfully executed command is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_c('br'),_v("\nExpected: All contacts that were cleared are restored. Result \"Address book has been restored\" shown in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("No command to undo")]),_v(" "),_c('ol',[_c('li',[_v("Prerequisites: No undoable commands have been executed since the starting of the app.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_c('br'),_v("\nExpected: No command is undone. Error message \"No commands to undo\" displayed in the status message.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-all-graduated-students"}},[_v("Deleting all graduated students"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-all-graduated-students","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Deleting all graduated students when all persons are being shown.\n"),_c('ol',[_c('li',[_v("Prerequisites: List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. Multiple persons in the list, with at least 1 person with GRADUATION_YEAR field earlier than the current year.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(", executed in YEAR, where YEAR is the current year. "),_c('br'),_v("\nExpected: All persons with GRADUATION_YEAR field YEAR - 1 or earlier deleted from the address book. Status message informs the user that graduated students have been deleted, and deleted persons visibly disappear from the list of all students.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean dasd")]),_v(", executed in YEAR, where YEAR is the current year. "),_c('br'),_v("\nExpected: Similar to (ii). All trailing characters in a valid command is ignored.")])])]),_v(" "),_c('li',[_v("Deleting all graduated students when only some persons are being shown, or when no people are shown.\n"),_c('ol',[_c('li',[_v("Prerequisites: Multiple persons in the list, with at least 1 person with GRADUATION_YEAR field earlier than the current year. Find a specific student with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command, typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/NAME")]),_v(", replacing NAME with the name of any person in the address book.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(", executed in YEAR, where YEAR is the current year. "),_c('br'),_v("\nExpected: All persons with GRADUATION_YEAR field YEAR - 1 or earlier deleted from the address book. Status message informs the user that graduated students have been deleted. However, if none of the graduated students have name NAME, the view does not change, as we continue to see the view of the address book after applying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n\\NAME")]),_v(". Use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" to see the effects of the deletion. An example is shown below with screenshots.\n"),_c('ol',[_c('li',[_v("It is currently 2024. Alex is the only student with GRADUATION_YEAR 2023 or earlier. "),_c('a',{attrs:{"href":"/tp/images/CleanManualTestingAfterFindStep1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CleanManualTestingAfterFindStep1.png","alt":"step 1"}})])]),_v(" "),_c('li',[_v("We execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/Bernice")]),_v(", such that only Bernice is in the view. "),_c('a',{attrs:{"href":"/tp/images/CleanManualTestingAfterFindStep2.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CleanManualTestingAfterFindStep2.png","alt":"step 2"}})])]),_v(" "),_c('li',[_v("We execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(". The view remains the same. "),_c('a',{attrs:{"href":"/tp/images/CleanManualTestingAfterFindStep2.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CleanManualTestingAfterFindStep2.png","alt":"step 3"}})])]),_v(" "),_c('li',[_v("We execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" and see that Alex is deleted. "),_c('a',{attrs:{"href":"/tp/images/CleanManualTestingAfterFindStep4.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CleanManualTestingAfterFindStep4.png","alt":"step 4"}})])])])])])]),_v(" "),_c('li',[_v("Attempting to delete all graduated students when there are none.\n"),_c('ol',[_c('li',[_v("Prerequisites: No persons present in the address book with GRADUATION_YEAR field earlier than the current year.")]),_v(" "),_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(", executed in YEAR, where YEAR is the current year. "),_c('br'),_v("\nExpected: An error message displayed informing the user that there are no graduated students to be deleted.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-planned-enhancements"}},[_c('strong',[_v("Appendix: Planned enhancements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-planned-enhancements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Add more precise functionality to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" command currently does not allow removal of\nstudents who have graduated in the current year, as it can only detect the graduation year but not the month. We plan to\nadd support for storing a more specific graduation date, such that we can accurately remove students who have graduated immediately after their graduation.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Add support for setting EmergencyName, EmergencyPhone and GraduationYear using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command.")]),_v("\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command currently does not allow setting emergency contact details and graduation year of students.\nThe only way to set these fields is through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command, which can be inconvenient for users.\nWe plan to add support for setting EmergencyName, EmergencyPhone and GraduationYear to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Add more features to the help command pop up window.")]),_v(" The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command pop up window currently only shows instructions for three commands, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(". We plan\nto add instructions for all other features to make it easier to familiarise themselves with the commands without going to the external User Guide.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-effort"}},[_c('strong',[_v("Appendix: Effort")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-effort","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"overview"}},[_v("Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Fields\n"),_c('ul',[_c('li',[_v("Added fields for room number, emergency contacts, and graduation year.")]),_v(" "),_c('li',[_v("Implemented relevant duplicate handling and field constraints for room number, emergency contacts, and graduation years.")]),_v(" "),_c('li',[_v("More specific and relevant field constraints and duplication handling for name, phone number, email address and tags.")])])]),_v(" "),_c('li',[_v("Features\n"),_c('ul',[_c('li',[_v("All commands that change the state of the address book are now undoable!")]),_v(" "),_c('li',[_v("It is now possible to export the state of the address book to a json file.")]),_v(" "),_c('li',[_v("It is now possible to import a json file into the address book.")]),_v(" "),_c('li',[_v("It is now possible to delete all students who have graduated at once in one command.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"challenges-faced"}},[_v("Challenges faced"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#challenges-faced","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"challenge-1-implementing-undo-functionality-for-import-command"}},[_v("Challenge 1: Implementing undo functionality for import command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#challenge-1-implementing-undo-functionality-for-import-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The undo functionality was initially implemented by extending an abstract class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ConcreteCommand")]),_v(" with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" abstract method.\nHowever, the import command is an undoable command that also extends the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FileAccessCommand")]),_v(" class.\nThis posed a challenge as the import command could not extend two classes at once because Java does not allow multiple inheritance.\nTo overcome this, we had to refactor the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ConcreteCommand")]),_v(" class to an interface "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Undoable")]),_v(" and let all undoable commands implement this interface.\nThis allowed us to implement the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" method in the import command.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(", generated on Tue, 12 Nov 2024, 6:22:45 GMT+8]")])])])}
}];
  