const SIDEBAR_ITEMS = [
    {
      "name": "Dashboard",
      "url": "index",
      "icon": "grid-fill"
    },
    {
      "name": "Components",
      "key": "component",
      "icon": "stack",
      "submenu": [
        {
          "name": "Alert",
          "url": "component-alert"
        },
        {
          "name": "Badge",
          "url": "component-badge"
        },
        {
          "name": "Breadcrumb",
          "url": "component-breadcrumb"
        },
        {
          "name": "Button",
          "url": "component-button"
        },
        {
          "name": "Card",
          "url": "component-card"
        },
        {
          "name": "Carousel",
          "url": "component-carousel"
        },
        {
          "name": "Collapse",
          "url": "component-collapse"
        },
        {
          "name": "Dropdown",
          "url": "component-dropdown"
        },
        {
          "name": "List Group",
          "url": "component-list-group"
        },
        {
          "name": "Modal",
          "url": "component-modal"
        },
        {
          "name": "Navs",
          "url": "component-navs"
        },
        {
          "name": "Pagination",
          "url": "component-pagination"
        },
        {
          "name": "Progress",
          "url": "component-progress"
        },
        {
          "name": "Spinner",
          "url": "component-spinner"
        },
        {
          "name": "Toasts",
          "url": "component-toasts"
        },
        {
          "name": "Tooltip",
          "url": "component-tooltip"
        }
      ]
    },
    {
      "name": "Extra Components",
      "key": "extra-component",
      "icon": "collection-fill",
      "submenu": [
        {
          "name": "Avatar",
          "url": "extra-component-avatar"
        },
        {
          "name": "Sweet Alert",
          "url": "extra-component-sweetalert"
        },
        {
          "name": "Toastify",
          "url": "extra-component-toastify"
        },
        {
          "name": "Rating",
          "url": "extra-component-rating"
        },
        {
          "name": "Divider",
          "url": "extra-component-divider"
        }
      ]
    },
    {
      "name": "Layouts",
      "key": "layout",
      "icon": "grid-1x2-fill",
      "submenu": [
        {
          "name": "Default Layout",
          "url": "layout-default"
        },
        {
          "name": "1 Column",
          "url": "layout-vertical-1-column"
        },
        {
          "name": "Vertical Navbar",
          "url": "layout-vertical-navbar"
        },
        {
          "name": "RTL Layout",
          "url": "layout-rtl"
        },
        {
          "name": "Horizontal Menu",
          "url": "layout-horizontal"
        }
      ]
    },
    {
      "name": "Forms & Tables",
      "isTitle": true
    },
    {
      "name": "Form Elements",
      "key": "form-element",
      "icon": "hexagon-fill",
      "submenu": [
        {
          "name": "Input",
          "url": "form-element-input"
        },
        {
          "name": "Input Group",
          "url": "form-element-input-group"
        },
        {
          "name": "Select",
          "url": "form-element-select"
        },
        {
          "name": "Radio",
          "url": "form-element-radio"
        },
        {
          "name": "Checkbox",
          "url": "form-element-checkbox"
        },
        {
          "name": "Textarea",
          "url": "form-element-textarea"
        }
      ]
    },
    {
      "name": "Form Layout",
      "url": "form-layout",
      "icon": "file-earmark-medical-fill"
    },
    {
      "name": "Form Validation",
      "icon": "journal-check",
      "key": "form-validation",
      "submenu": [
        {
          "name": "Parsley",
          "url": "form-validation-parsley"
        }
      ]
    },
    {
      "name": "Form Editor",
      "icon": "pen-fill",
      "key": "form-editor",
      "submenu": [
        {
          "name": "Quill",
          "url": "form-editor-quill"
        },
        {
          "name": "CKEditor",
          "url": "form-editor-ckeditor"
        },
        {
          "name": "Summernote",
          "url": "form-editor-summernote"
        },
        {
          "name": "TinyMCE",
          "url": "form-editor-tinymce"
        }
      ]
    },
    {
      "name": "Table",
      "url": "table",
      "icon": "grid-1x2-fill"
    },
    {
      "name": "Datatables",
      "key": "table-datatable",
      "icon": "file-earmark-spreadsheet-fill",
      "submenu": [
        {
          "name": "Datatable",
          "url": "table-datatable"
        },
        {
          "name": "Datatable (jQuery)",
          "url": "table-datatable-jquery"
        }
      ]
    },
    {
      "name": "Extra UI",
      "isTitle": true
    },
    {
      "name": "Widgets",
      "key": "ui-widgets",
      "icon": "pentagon-fill",
      "submenu": [
        {
          "name": "Chatbox",
          "url": "ui-widgets-chatbox"
        },
        {
          "name": "Pricing",
          "url": "ui-widgets-pricing"
        },
        {
          "name": "To-do List",
          "url": "ui-widgets-todolist"
        }
      ]
    },
    {
      "name": "Icons",
      "key": "ui-icons",
      "icon": "egg-fill",
      "submenu": [
        {
          "name": "Bootstrap Icons ",
          "url": "ui-icons-bootstrap-icons"
        },
        {
          "name": "Fontawesome",
          "url": "ui-icons-fontawesome"
        },
        {
          "name": "Dripicons",
          "url": "ui-icons-dripicons"
        }
      ]
    },
    {
      "name": "Charts",
      "key": "ui-chart",
      "icon": "bar-chart-fill",
      "submenu": [
        {
          "name": "ChartJS",
          "url": "ui-chart-chartjs"
        },
        {
          "name": "Apexcharts",
          "url": "ui-chart-apexcharts"
        }
      ]
    },
    {
      "name": "File Uploader",
      "key": "ui-file",
      "icon": "cloud-arrow-up-fill",
      "url": "ui-file-uploader"
    },
    {
      "name": "Maps",
      "key": "ui-map",
      "icon": "map-fill",
      "submenu": [
        {
          "name": "Google Map",
          "url": "ui-map-google-map"
        },
        {
          "name": "JS Vector Map",
          "url": "ui-map-jsvectormap"
        }
      ]
    },
    {
      "name": "Pages",
      "isTitle": true
    },
    {
      "name": "Email Application",
      "key": "application-email",
      "icon": "envelope-fill",
      "url": "application-email"
    },
    {
      "name": "Chat Application",
      "key": "application-chat",
      "icon": "chat-dots-fill",
      "url": "application-chat"
    },
    {
      "name": "Photo Gallery",
      "key": "application-gallery",
      "icon": "image-fill",
      "url": "application-gallery"
    },
    {
      "name": "Checkout Page",
      "key": "application-checkout",
      "icon": "basket-fill",
      "url": "application-checkout"
    },
    {
      "name": "Authentication",
      "key": "auth",
      "icon": "person-badge-fill",
      "submenu": [
        {
          "name": "Login",
          "url": "auth-login"
        },
        {
          "name": "Register",
          "url": "auth-register"
        },
        {
          "name": "Forgot Password",
          "url": "auth-forgot-password"
        }
      ]
    },
    {
      "name": "Errors",
      "key": "error",
      "icon": "x-octagon-fill",
      "submenu": [
        {
          "name": "403",
          "url": "error-403"
        },
        {
          "name": "404",
          "url": "error-404"
        },
        {
          "name": "500",
          "url": "error-500"
        }
      ]
    },
    {
      "name": "Raise Support",
      "isTitle": true
    },
    {
      "name": "Documentation",
      "key": "error",
      "icon": "life-preserver",
      "url": "https://zuramai.github.io/mazer/docs"
    },
    {
      "name": "Contribute",
      "key": "error",
      "url": "https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md",
      "icon": "puzzle"
    },
    {
      "name": "Donate",
      "key": "error",
      "url": "https://github.com/zuramai/mazer#donation",
      "icon": "cash"
    }
  ];

  export {
    SIDEBAR_ITEMS
  }