  ## Facility Management System - Supervisor Login Documentation

  ### Facility Management System - Supervisor Login Page

![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/CaptureLogin.PNG)
 
> This page will enroute the user to the `Admin Login, Supervisor Login and Technician Login` according to the username and password. 
>
> In facility management systems, a Supervisor is responsible for overseeing the day-to-day operations of a facility, ensuring that everything runs smoothly and efficiently. They manage a team of `staff members, assign tasks and coordinate activities such as maintenance, cleaning, and repairs`. Supervisors also ensure that safety protocols are followed, handle any emergencies or issues that arise, and serve as a point of contact for both employees and clients. Their role is crucial in maintaining the overall functionality, safety, and quality of the facility.

  ### `Master`

> *  The Master menu has an important functionality to add any New Site, Location, Asset and Employee.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture8.PNG)

  ### `Site`

> *  In a facility management system, A "Site" refers to a specific `location or property` that requires management and oversight. It serves as a foundational unit within the system, allowing facility managers to efficiently organize and control various aspects of facility operations.
>
> *  This includes tracking `physical assets, managing space utilization, scheduling maintenance tasks, ensuring compliance with regulations, monitoring security measures, and handling financial aspects` related to the site. 
>
> *  Essentially, a site in a facility management system serves as a central point for managing all the `essential functions and activities` associated with a particular facility or property.
>
> *  Here, In our application we can create or add a site for the facility operations by clicking the create button. 
>
> *  The Site create form will open, Fill the form with `Site Name, Site Image and Description`. 
>
> *  The Site will create successfully with the unique site id for each and every site. 
>
> *  The Action button also available for `Edit and Delete` the site.
>
> *  To view the Site details, click the unique Site id to see the details page. At the bottom of the details page, there is an option available to `create an Employee Site` and the created employee site list also available in this page. 

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture9.PNG)

> *  Basically Employee Site is creating for `dividing and assigning` the site for an employee for a particular work has to be done within a particular area. 
>
> *  To Create Employee Site by clicking the create button and create popup will open, An Admin can fill form by choosing Site Name and Site Id and the unique Employee Id will generate automatically while creating Employee Site. 
>
> *  There is also an Action available to `Edit and Delete` the Employee Site if any mistakes done. The Left side of the Employee Id, `"+"` icon is available. By using this icon to assign the employee to the particular site for the particular work.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture10..PNG)

  ### `Location`

>  In a facility management system, `"Location"` refers to the specific physical placement or position of assets within a facility. It involves accurately identifying and documenting where each asset is located within the facility, whether it's a `room, floor, building, or outdoor area`. Managing asset locations helps facilitate efficient operations by enabling staff to easily locate and access assets when needed. 
>
>  Additionally, location data can aid in space `planning, maintenance scheduling, and emergency response efforts`. By effectively managing asset locations, facility managers can streamline workflows, optimize space utilization, and enhance overall productivity within the facility.  

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture11.PNG)

> *  This page is the location list page and we can create Location here by clicking the create button.
>
> *  Click the Location in the Work Item Type List. There is 4 fields in the Location Create form, `Site Id, Location Id, Location Type and Description`. Except Description other 3 fields are mandatory fields and the Location Id is need not to be fill manually, it will generate automatically.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture12.PNG)

> *  Here, It lists the total list of locations which comes under the facility operations. In this list we can Edit or Delete the location incase of mistakes happend while creating. Also the options available to give permission for the user to access the `Create, Update, Delete or ReadOnly` in the user location.

  ### `Asset`

>  In facility management systems, an asset typically refers to any physical item or resource within a facility that contributes to its operations or services. This can include `equipment, machinery, furniture, vehicles, and buildings`. Assets are managed within the system to ensure they are properly maintained, tracked for location and condition, and utilized efficiently to support the facility's functions. Effective asset management helps optimize resource allocation, minimize downtime, and ensure regulatory compliance, ultimately enhancing the overall performance and value of the facility. 

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture13.PNG)

> *  This is the list of Assets with Edit and Delete options. To Add a New Asset in the list, Click the Create button in top of the list. The Asset Create popup will open and it has a 5 fields in the create form. They are, Asset Id, Asset Type, Category Id, Location and Description. Asset Id will generate automatically for each and every new asset create. Except the Asset Id, the Asset Type, Category Id and Location will select data from dropdown and Description is a Textbox as you can write any description about the asset.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture14.PNG)

  ### `Employee` 

>  In a facility management system, an `"Employee"` refers to an individual who is part of the workforce responsible for managing, maintaining or operating the facility. This can include `maintenance technicians, custodial staff, security personnel, administrative staff, and managers` overseeing various aspects of facility operations. 
>
>  Employee data within the facility management system typically includes information such as `contact details, job roles, certifications, training records, work schedules, and performance evaluations`. Managing employee information in the system allows facility managers to efficiently allocate resources, track staff availability, ensure compliance with regulations, and monitor workforce productivity. 
>
>  By effectively managing employee data, facility managers can optimize staffing levels, improve communication among team members, and enhance overall operational efficiency within the facility.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture15.PNG)

> *  In this Employee menu there is a list of total employees who are working in the Facility Operations. In this list table we can `Edit` the `Employee Name and Email` and we can `Delete` the whole `Employee data`. 

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture16.PNG)

> *  We can add a New Employee by clicking the Create button, the create employee popup will open and there are 3 fields `Employee Id, Employee Name and Email`. 
>
> *  `Employee Id and Employee Name` are mandatory fields, but the unique employee id will generate automatically while creating the new employee.  

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture17.PNG)

> *  Click the Employee Id to view the Employee's details page. At the bottom of the details page, here we can create a `Employee Location, Employee Asset, Employee Site and Employee Category` for that particular employee by clicking the Create button.

  ### Create Employee Location

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture18.PNG)

> *  The popup will open for the Employee Location Create with 3 fields named as `Employee Id, Location Name, Location Id`. While creating employee location, the unique Employee Id will patch automatically for that particular employee. 
>
> *  An Admin would choose the `Location Name` in the `dropdown` and the `Location Id` will patch automatically based on the Location Name.

> *  Here the `Action` available only for `Delete` the Employee Location.

> *  Click the `'+'` icon near the Employee Id to `assign` the `Employee` to the particular `Location`.

  ### Create Employee Asset

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture20.PNG)

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture21.PNG)
 
> *  Here the list of Employee Asset table is available.

> *  Click the Create button to create Employee Asset. By clicking the create button, the popup will open with 2 fields as `Employee Id` which will patch automatically and the Admin can choose `Asset Id` from the dropdown to create the Employee Asset for the particular employee.

> *  `Edit and Delete` Actions available in the Employee Asset list table.

> *  Click `'+'` icon near the Eployee Id to `assign` the `Employee` to the particular `Asset`.

  ### Create Employee Site

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture22.PNG)

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture23.PNG)

> *  Click the `Create button` to open the `Employee Site Create` popup.

> *  There are `3 fields` in the create popup, `Employee Id, Site Name and SiteId`.

> *  Employee Id will patch automatically in the form and select the `Site name` in dropdown and the `Site Id` will patch automatically based on `Site Name`.

> *  `Edit and Delete` Actions available in the Employee Site list table.

> *  Click `'+'` icon near the Eployee Id to `assign` the `Employee` to the particular `Site`.

  ### Create Employee Category

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture24.PNG)  

> *  Here the list of Employee Category table is available.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture25.PNG)

> *  To Create Employee Category, Click the create button to create `Work category` for a particular `Employee`.

> *  There are `3 fields` in the Emploeyee Category Create form. They are, `Employee Id, Work Category Name and Work Category Id`.

> *  Employee Id will patch automatically in the form.

> *  Select the Work Category Name from the `dropdown` and the `Work Category Id` will patch automatically based on the `Work Category Name`.

> *  `Edit and Delete` Actions available in the Employee Category list table.

> *  Click `'+'` icon near the Eployee Id to `assign` the `Employee` to the particular `Work Category`.

  ### `Work Plan`

  In a facility management system, a work plan is a structured document that outlines the tasks and activities required to maintain and manage a facility effectively. It includes details such as the tasks to be completed, who is responsible for each task, the timeline for completion, and any necessary resources or materials. Work plans help facility managers organize and prioritize maintenance activities, ensuring that tasks are completed efficiently and that the facility operates smoothly. They provide a roadmap for managing resources and monitoring progress toward maintenance goals.

  > *  This page shows the Work Plans which is created by an Admin.

  > *  Here, the Supervisor can't able to create the work plans.

  > *  The Work Plans are show in the tile design view with enough details of the work plan.

  > *  Click the Work Plan tile to see the whole work plan details.

  > *  Here, the Supervisor can create the Work Order in the work plan details page below the work plan details.

  > *  The Supervisor can able to create, edit & delete the work order data.

  > *  Work Order Id will route to the work order details page. In the Work Order details page, supervisor can create work order task.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture026.PNG)

  ### `Work Order`

  In a Facility Management System, a work order is a `formal directive or request issued to initiate, track, and manage maintenance, repair, or service tasks` within a facility. It serves as a communication tool between `facility managers, maintenance staff` and providing details such as the nature of the work, location, priority level, and deadline. Work orders streamline the process of assigning `tasks, allocating resources, and tracking progress` to ensure timely completion and efficient facility operations.

  > *  This Work Order page has no create option to create work order.

  > *  The Work Orders are shown in the tile design view with enough details of work orders.

  > *  Click the Work Order tile to see the whole work order details.

  > *  Here, the Supervisor can create the Work Order Task in the work order details page below the work order details.

  > *  The Supervisor can able to create, edit & delete the created work order task data.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture027.PNG)

  ### `Work Order Task`

  A work order task refers to a specific job or assignment outlined within a work order. Each work order typically contains one or more tasks that need to be completed to `address maintenance, repair, or service needs` within a facility. These tasks include details such as the description of the work to be performed, the location where the work is required, any materials or equipment needed, and the timeline for completion. Work order tasks help organize and prioritize maintenance activities, ensuring that tasks are `assigned, executed, and documented efficiently` to maintain optimal facility functionality.

  > *  This Work Order Task page has no create option to create new work order tasks, instead it shows the list of work order tasks which was created by the Admin or Supervisor.

  > *  The Work Order Tasks are shown in the table list view with details.

  > *  Click the TaskId of the Work Order Task to see the whole details of the work order tasks.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture028.PNG)

  ### `Incomplete Work Order`

  > *  This Incomplete Work Order page shows the incomplete work orders in tile design view with `enough of details` about the work orders.

  > *  Click the Work Order Id in the tile to `see the whole details of the incomplete work order`.

  > *  In the Incomplete Work Order details page, we can `create the Work Order Tasks` below the Incomplete Work Order details.

  > *  Also we can `create, Edit & Delete` the created work order tasks.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture029.PNG)

  ### `Incomplete Work Order Task`

  > *  This Incomplete Work Order Task page shows the incomplete work order tasks in card type design view with `Task, Order Id & Order` details.

  > * By clicking the Order Id on the top, it opens the `details of the task on the right side with timeline & process stage`.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture030.PNG)

  ### `Report`

  In the Report menu there are 4 sub-menus, They are;

>  1. User Login Report
>  2. Work Order Report
>  3. Work Order Task Report
>  4. Work Order Task Report By Employee

  ### `User Login Report`

  > *  This User Login Report page shows the login records of the users with timing.

  > *  This Report page has a search filters to filter the users of `Sign In date, Sign Out date & also can filter using User Id`.

  > *  This User Login Report shows the details of the `User Name, User Id, Created Date, Sign In Date Time, Sign Out Date Time, IP Address, Platform & Server`.

  > *  Also this reports are shown in the chart type of `Total count, Unique count in Login report and Total users, Active users, Signed Out users` chart in Active Report.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture031.PNG)

  ### `Work Order Report`

> *  A `work order report` in a facility management system is a document that provides detailed information about `maintenance or repair tasks` that need to be completed within a facility. 

> *  This report typically includes `essential details` such as the nature of the `work to be performed`, `the location of the task`, `the priority level`, `the assigned personnel` or `team responsible for completing the task`, and `any relevant deadlines` or `scheduling requirements`.  

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture032.PNG)  

> *  This page is filled with the records of `Work Order's Report`, which means the `current status` of the work order shows with data.

> *  This is the Work Order Report table list filled with the records of `Order Id, Description, Plan Id, Location, Type, Site, Category, Date Time, Frequency, Assigned to, Status and Remarks`.

> *  This page has a Filter options to `filter` the reports by `Site, Location & Category` with `From Date & To Date`.

  ### `Work Order Task Report`

> *  A Work Order Task Report in a Facility Management System provides a concise overview of all work orders within a facility.

> *  It includes details like `task descriptions, assigned personnel, deadlines, and task statuses` (`e.g., pending, in progress, completed`). 

> *  This report helps facility managers `track progress, allocate resources efficiently, and ensure timely completion of maintenance tasks`. It also facilitates communication between different teams involved in facility management and supports informed decision-making regarding resource allocation and task prioritization.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture033.PNG)

> *  This Work Order Task Report page has filled with the records of `Work Order Task Report` which means the `current status` of the work order task's report.

> *  The Previous menu Work Order Report shows only the Work Order's Report but this shows the Work Order Task's Reports.

> *  This page shows data only when the filter is used to search data or otherwise the table list shows empty.

  ### `Work Order Task Report By Employee`

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture034.PNG)  

> *  A Work Order Task Report by Employee in a Facility Management System has a Reports of Work Order Task by an employee with the data of `Status, Task Id, Task Name, Plan Id, Plan Description, Site Name, Order Id, Order Name, Asset, Activity, Schedule Date, Actual Date, Assigned to and Remarks`.

> *  This is the Report of an Employee about his Work Order Task Status.

> *  The Previous menu Work Order Task Report shows the `general reports` or status of the `Work Order Task`, But this menu shows the reports of every `individual employee's work order task report`.

> *  This table has a filter options to `filter` the reports by `Site, & Employee id` with `From Date & To Date`. By this way of filtering the records, the page shows the particular `reports of an employee`.

> *  This page shows data only when the filter is used to search data or otherwise the table list shows empty.

  ### `Setup`

> Setup menu in the Facility Management System in Admin Login is the most important menu, because all of the work setup in facility operation can be done here. Here we can setup the `Work Cateory, Work Activity, Asset Type,, Schedule, Material and Location` Type for the whole facility operations.    

  ### `Work Category`

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture035.PNG)

>  A work category is a way of organizing different types of `maintenance, repair, or service tasks` based on their similarities. These categories help streamline management processes by grouping similar tasks together, such as `electrical work, plumbing, HVAC maintenance, janitorial services, and more`. By categorizing tasks in this way, facility managers can efficiently allocate resources, prioritize tasks, and track performance within each category, leading to improved maintenance and operation of the facility.

> *  This is the `Work Category setup` page, we can create a work category here by clicking create button and the create form popup will open.

> *  To Create the Work Category, fill the 3 fields in the form. They are, `Work Category Name, Frequency (Hourly, Daily, Weekly, Monthly, Yearly), Description`.

> *  `Edit and Delete` Actions available in the Work Category list table.

> *  To view the details page of the work category, click the unique Work Category Id for each work category.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture036.PNG)

> *  At the bottom of the `details page`, we can see the `Employee Category` table list.

> *  This Employee Category table list shows the employee list who are all assigned for this particular work category.

> *  Click the Create button to create the new Employee category here.

> *  Here the option to assign the employee to the work category by clicking `'+'` icon near empoyee id.

  ### `Work Activity`

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture037.PNG)

> *  The Work Activity in the Facility Management System provides the `types of activities` in the work listed here.

> *  Click Create button to create a new Work Activity.

> *  Work Activity create form has the fields of `Activity Name, Category Id, Asset Required (checkbox), Asset Type, Location Type, Add Checklist (if needed)`.

> *   `Edit and Delete` Actions available in the Work Activity list table.

  ### `Asset Type`

Every company has some assets that they want to maintain or service for a particular period of time and it depends upon the assets. For example Air conditioner maintenance like cleaning filter, gas update. This could be done for one year once. So the maintenance period of the assets should vary depends upon the assets. So that kind of assets are listed here for the facility operations.

  ![](/Assets//Capture038.PNG)

> *  Click Create button to create or add a new Asset Type in the list.

> *  Create Asset Type form has a 3 fields such as, AssetType Id, Category Id, Descrition.

> *  This Asset Type table list has the data under the fields of `Asset Type Id, Type Name, Category Id, Category Name`.

> *  `Edit and Delete` Actions available in the Asset Type list table.

  ### `Schedule`

In facility management, a schedule is a plan that outlines when specific tasks or activities will be carried out within a facility. These tasks can include `maintenance, cleaning, inspections, and repairs`. Schedules help ensure that necessary actions are taken at the right time to maintain the facility's functionality and safety. They are typically created based on factors like equipment needs, occupancy patterns, and regulatory requirements, and are managed using scheduling tools or software for efficient tracking and execution.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture039.PNG)

> *  Click Create button to create or add a new Schedule in the table list.

> *  Create Schedule form has some fields, used to create the schedule.

> *  The Fields are in the create schedule form is Site, Work Category, Frequency, Start Date, End Date, Working Hours (Start Time & End Time ) fields will show only when the frequency is in hourly.

> *  `Edit and Delete` Actions available in the Schedule list table.

> *  The Schedule list table shows the data in the fields of Site, Site Name, Work Category Id, Work Category Name, Frequency, Schedule Id, Start Date, Start Time, End Date, End Time.

  ### `Material`

In facility management, materials refer to the physical resources needed to support the operation and maintenance of a facility. This includes a wide range of items such as `building materials, equipment, tools, consumables, spare parts, and supplies`.

Managing materials effectively is essential for ensuring that facilities operate smoothly and efficiently. This involves tasks such as procurement, inventory management, storage, and distribution. By effectively managing materials, facility managers can minimize downtime, reduce costs, and ensure that resources are available when needed to support maintenance, repairs, and other facility-related activities.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture40.PNG)

> *  The Materials which has been used for the facility operations that are listed in the table.

> *  Click Create button to create or add a new material in the table list for the facility operations.

> *  This table list holds the data in the fields of Material Id and Item.

  ### `Location Type`

In a facility management system, location type refers to the categorization of different areas within a facility based on their function, layout, or specific characteristics. These location types help organize and manage the facility efficiently. 

For example, common location types might include offices, meeting rooms, restrooms, storage areas, utility rooms, and production floors. Each location type may have unique requirements in terms of maintenance, cleaning, security, and access control.

By categorizing locations into types, facility managers can streamline processes such as assigning tasks, allocating resources, and tracking activities. This classification also helps in identifying patterns, analyzing data, and making informed decisions to optimize facility operations and enhance user experience.

  ![](assets/Documents/Mawarid-Maintenance-Documentation/SupervisorLoginDocumentation/Assets/Capture41.PNG)

> *  This table list shows the Location Type and it's Description.

> *  Click Create button to create or add a new Location Type.

> *  Fill the Location Type and Description fields in the Location Type Create form

> *  This Location Types table list has the Edit & Delete options.
