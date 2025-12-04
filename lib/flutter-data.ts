export interface Property {
  name: string
  type: string
  description: {
    en: string
    ar: string
  }
}

export interface Widget {
  id: string
  name: string
  icon: string
  type: string
  description: {
    en: string
    ar: string
  }
  properties: Property[]
  code: string
  tips: {
    en: string[]
    ar: string[]
  }
}

export const flutterWidgets: Widget[] = [
  {
    id: "text",
    name: "Text",
    icon: "📝",
    type: "Basic Widget",
    description: {
      en: "The Text widget displays a string of text with single style. If the text exceeds the given width, it will be broken at soft line breaks and wrapped onto the next line.",
      ar: "أداة Text تعرض سلسلة من النصوص بأسلوب موحد. إذا تجاوز النص العرض المحدد، سيتم فصله وكسره على السطر التالي.",
    },
    properties: [
      {
        name: "data",
        type: "String",
        description: {
          en: "The text string to display",
          ar: "سلسلة النصوص المراد عرضها",
        },
      },
      {
        name: "style",
        type: "TextStyle",
        description: {
          en: "How the text should be displayed",
          ar: "كيفية عرض النص",
        },
      },
      {
        name: "textAlign",
        type: "TextAlign",
        description: {
          en: "How the text should be aligned horizontally",
          ar: "محاذاة النص بشكل أفقي",
        },
      },
    ],
    code: `Text(
  'Hello World',
  style: TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.blue,
  ),
  textAlign: TextAlign.center,
)`,
    tips: {
      en: [
        "Use TextStyle for custom formatting like font size, weight, and color",
        "Combine with TextAlign for horizontal alignment",
        "Use overflow property to handle text that exceeds container width",
      ],
      ar: [
        "استخدم TextStyle للتنسيق المخصص مثل حجم الخط والوزن واللون",
        "اجمع مع TextAlign لمحاذاة أفقية",
        "استخدم خاصية overflow للتعامل مع النصوص التي تتجاوز عرض الحاوية",
      ],
    },
  },
  {
    id: "button",
    name: "ElevatedButton",
    icon: "🔘",
    type: "Interactive Widget",
    description: {
      en: "A material design button that elevates when pressed. It is used for important actions that the user might want to take.",
      ar: "زر بتصميم مادي يرتفع عند الضغط عليه. يُستخدم للإجراءات المهمة التي قد يرغب المستخدم في القيام بها.",
    },
    properties: [
      {
        name: "onPressed",
        type: "VoidCallback",
        description: {
          en: "Called when the button is pressed",
          ar: "يتم استدعاؤها عند الضغط على الزر",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget below this widget in the tree",
          ar: "الأداة أسفل هذه الأداة في الشجرة",
        },
      },
      {
        name: "style",
        type: "ButtonStyle",
        description: {
          en: "Customize button appearance",
          ar: "تخصيص مظهر الزر",
        },
      },
    ],
    code: `ElevatedButton(
  onPressed: () {
    print('Button pressed!');
  },
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
    padding: EdgeInsets.symmetric(
      horizontal: 24,
      vertical: 12,
    ),
  ),
  child: Text('Click Me'),
)`,
    tips: {
      en: [
        "Set onPressed to null to disable the button",
        "Use style property to customize colors and sizing",
        "Combine with GestureDetector for complex gestures",
      ],
      ar: [
        "اجعل onPressed null لتعطيل الزر",
        "استخدم خاصية style لتخصيص الألوان والأحجام",
        "اجمع مع GestureDetector للإيماءات المعقدة",
      ],
    },
  },
  {
    id: "column",
    name: "Column",
    icon: "📊",
    type: "Layout Widget",
    description: {
      en: "A widget that displays its children in a vertical array. It is useful for organizing widgets vertically on the screen.",
      ar: "أداة تعرض أطفالها في مصفوفة رأسية. إنها مفيدة لتنظيم الأدوات بشكل رأسي على الشاشة.",
    },
    properties: [
      {
        name: "children",
        type: "List<Widget>",
        description: {
          en: "The widgets to display vertically",
          ar: "الأدوات المراد عرضها بشكل رأسي",
        },
      },
      {
        name: "mainAxisAlignment",
        type: "MainAxisAlignment",
        description: {
          en: "How the children should be placed along the vertical axis",
          ar: "كيفية وضع الأطفال على طول المحور الرأسي",
        },
      },
      {
        name: "crossAxisAlignment",
        type: "CrossAxisAlignment",
        description: {
          en: "How the children should be aligned along the horizontal axis",
          ar: "كيفية محاذاة الأطفال على طول المحور الأفقي",
        },
      },
    ],
    code: `Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    Text('First Item'),
    SizedBox(height: 16),
    Text('Second Item'),
    SizedBox(height: 16),
    Text('Third Item'),
  ],
)`,
    tips: {
      en: [
        "Use SizedBox for spacing between children instead of margins",
        "Combine with Expanded to distribute space proportionally",
        "Use crossAxisAlignment to align items horizontally",
      ],
      ar: [
        "استخدم SizedBox للمسافات بين الأطفال بدلاً من الهوامش",
        "اجمع مع Expanded لتوزيع المساحة بشكل متناسب",
        "استخدم crossAxisAlignment لمحاذاة العناصر أفقياً",
      ],
    },
  },
  {
    id: "row",
    name: "Row",
    icon: "↔️",
    type: "Layout Widget",
    description: {
      en: "A widget that displays its children in a horizontal array. Perfect for creating side-by-side layouts.",
      ar: "أداة تعرض أطفالها في مصفوفة أفقية. مثالية لإنشاء تخطيطات جنباً إلى جنب.",
    },
    properties: [
      {
        name: "children",
        type: "List<Widget>",
        description: {
          en: "The widgets to display horizontally",
          ar: "الأدوات المراد عرضها أفقياً",
        },
      },
      {
        name: "mainAxisAlignment",
        type: "MainAxisAlignment",
        description: {
          en: "How children are placed along the horizontal axis",
          ar: "كيفية وضع الأطفال على طول المحور الأفقي",
        },
      },
      {
        name: "crossAxisAlignment",
        type: "CrossAxisAlignment",
        description: {
          en: "How children are aligned along the vertical axis",
          ar: "كيفية محاذاة الأطفال على طول المحور الرأسي",
        },
      },
    ],
    code: `Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    Icon(Icons.star),
    Text('Rating'),
    Icon(Icons.star),
  ],
)`,
    tips: {
      en: [
        "Use Expanded to make children take equal space",
        "Use SizedBox for consistent spacing",
        "Combine with mainAxisAlignment for distribution",
      ],
      ar: [
        "استخدم Expanded لجعل الأطفال يحتلون مساحة متساوية",
        "استخدم SizedBox للمسافات المتسقة",
        "اجمع مع mainAxisAlignment للتوزيع",
      ],
    },
  },
  {
    id: "container",
    name: "Container",
    icon: "📦",
    type: "Layout Widget",
    description: {
      en: "A convenience widget that combines common painting, positioning, and sizing widgets. A container first surrounds the child with padding, then applies additional constraints to the padded extent.",
      ar: "أداة توفير تجمع أدوات الرسم والموضع والحجم الشائعة. تحيط الحاوية أولاً الطفل بالحشو ثم تطبق قيوداً إضافية على الامتداد المحشو.",
    },
    properties: [
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside the container",
          ar: "الأداة داخل الحاوية",
        },
      },
      {
        name: "color",
        type: "Color",
        description: {
          en: "The background color of the container",
          ar: "لون الخلفية للحاوية",
        },
      },
      {
        name: "padding",
        type: "EdgeInsets",
        description: {
          en: "Empty space to surround the child",
          ar: "مساحة فارغة تحيط بالطفل",
        },
      },
    ],
    code: `Container(
  width: 200,
  height: 200,
  padding: EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(12),
    boxShadow: [
      BoxShadow(
        color: Colors.black26,
        blurRadius: 8,
      ),
    ],
  ),
  child: Text('Hello'),
)`,
    tips: {
      en: [
        "Use BoxDecoration for complex styling",
        "Combine padding with margin for spacing control",
        "Use constraints to limit size",
      ],
      ar: [
        "استخدم BoxDecoration للتصميم المعقد",
        "اجمع الحشو مع الهامش للتحكم في المسافات",
        "استخدم القيود لتحديد الحجم",
      ],
    },
  },
  {
    id: "listview",
    name: "ListView",
    icon: "📋",
    type: "Scrolling Widget",
    description: {
      en: "A scrollable, linear array of widgets. ListView is the most commonly used scrolling widget. It displays its children one after another in the scroll direction.",
      ar: "مصفوفة خطية قابلة للتمرير من الأدوات. ListView هي الأداة القابلة للتمرير الأكثر استخداماً. تعرض أطفالها واحداً تلو الآخر في اتجاه التمرير.",
    },
    properties: [
      {
        name: "children",
        type: "List<Widget>",
        description: {
          en: "The widgets to display in a scrollable list",
          ar: "الأدوات المراد عرضها في قائمة قابلة للتمرير",
        },
      },
      {
        name: "scrollDirection",
        type: "Axis",
        description: {
          en: "The axis along which the scroll view scrolls",
          ar: "المحور الذي يتمرر عليه عرض التمرير",
        },
      },
      {
        name: "itemCount",
        type: "int",
        description: {
          en: "The number of children (for ListView.builder)",
          ar: "عدد الأطفال (لـ ListView.builder)",
        },
      },
    ],
    code: `ListView.builder(
  itemCount: 100,
  itemBuilder: (context, index) {
    return ListTile(
      leading: Icon(Icons.item),
      title: Text('Item \$index'),
      subtitle: Text('Description'),
      trailing: Icon(Icons.arrow_forward),
    );
  },
)`,
    tips: {
      en: [
        "Use ListView.builder for dynamic or large lists",
        "Use ListView with fixed children for small lists",
        "Set scrollDirection to Axis.horizontal for horizontal scrolling",
      ],
      ar: [
        "استخدم ListView.builder للقوائم الديناميكية أو الكبيرة",
        "استخدم ListView مع الأطفال الثابتين للقوائم الصغيرة",
        "اضبط scrollDirection على Axis.horizontal للتمرير الأفقي",
      ],
    },
  },
  {
    id: "scaffold",
    name: "Scaffold",
    icon: "🏗️",
    type: "Layout Widget",
    description: {
      en: "Implements the basic material design visual layout structure of the Flutter app. It provides AppBar, body, floating action button and drawer support.",
      ar: "ينفذ الهيكل الأساسي لتخطيط التصميم المادي لتطبيق Flutter. يوفر دعماً لـ AppBar و body و floating action button و drawer.",
    },
    properties: [
      {
        name: "appBar",
        type: "PreferredSizeWidget",
        description: {
          en: "The app bar displayed at the top",
          ar: "شريط التطبيق المعروض في الأعلى",
        },
      },
      {
        name: "body",
        type: "Widget",
        description: {
          en: "The main content of the scaffold",
          ar: "المحتوى الرئيسي للـ scaffold",
        },
      },
      {
        name: "floatingActionButton",
        type: "Widget",
        description: {
          en: "The button displayed floating on the bottom right",
          ar: "الزر المعروض بشكل عائم في أسفل اليمين",
        },
      },
    ],
    code: `Scaffold(
  appBar: AppBar(
    title: Text('My App'),
    backgroundColor: Colors.blue,
  ),
  body: Center(
    child: Text('Hello World'),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
  drawer: Drawer(
    child: ListView(
      children: [
        DrawerHeader(child: Text('Menu')),
        ListTile(title: Text('Option 1')),
      ],
    ),
  ),
)`,
    tips: {
      en: [
        "Scaffold provides a consistent layout structure",
        "Use AppBar for navigation and actions",
        "FloatingActionButton should be used for primary actions",
      ],
      ar: [
        "يوفر Scaffold بنية تخطيط متسقة",
        "استخدم AppBar للملاحة والإجراءات",
        "يجب استخدام FloatingActionButton للإجراءات الأساسية",
      ],
    },
  },
  {
    id: "textfield",
    name: "TextField",
    icon: "⌨️",
    type: "Input Widget",
    description: {
      en: "A material design text field. A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.",
      ar: "حقل نصي بتصميم مادي. يتيح حقل النص للمستخدم إدخال النص باستخدام لوحة المفاتيح أو لوحة المفاتيح على الشاشة.",
    },
    properties: [
      {
        name: "controller",
        type: "TextEditingController",
        description: {
          en: "Controls the text being edited",
          ar: "يتحكم في النص الذي يتم تحريره",
        },
      },
      {
        name: "decoration",
        type: "InputDecoration",
        description: {
          en: "Styling for the input field",
          ar: "تصميم حقل الإدخال",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<String>",
        description: {
          en: "Called when the user modifies the text",
          ar: "يتم استدعاؤها عندما يعدل المستخدم النص",
        },
      },
    ],
    code: `TextEditingController controller = TextEditingController();

TextField(
  controller: controller,
  decoration: InputDecoration(
    hintText: 'Enter your name',
    labelText: 'Name',
    border: OutlineInputBorder(),
    prefixIcon: Icon(Icons.person),
  ),
  onChanged: (value) {
    print('User typed: \$value');
  },
)`,
    tips: {
      en: [
        "Always dispose TextEditingController in dispose() method",
        "Use InputDecoration for styling and hints",
        "Combine with Form widget for validation",
      ],
      ar: [
        "استخدم dispose() دائماً للتخلص من TextEditingController",
        "استخدم InputDecoration للتصميم والتلميحات",
        "اجمع مع Form widget للتحقق",
      ],
    },
  },
  {
    id: "stack",
    name: "Stack",
    icon: "📚",
    type: "Layout Widget",
    description: {
      en: "A widget that positions its children relative to the edges of its box. This is useful for overlapping several children in a simple way.",
      ar: "أداة تحدد موضع أطفالها بالنسبة إلى حواف صندوقها. هذا مفيد لتداخل عدة أطفال بطريقة بسيطة.",
    },
    properties: [
      {
        name: "children",
        type: "List<Widget>",
        description: {
          en: "The widgets to display in the stack",
          ar: "الأدوات المراد عرضها في المكدس",
        },
      },
      {
        name: "alignment",
        type: "AlignmentGeometry",
        description: {
          en: "How to align the non-positioned children",
          ar: "كيفية محاذاة الأطفال غير المحددة مواقعهم",
        },
      },
      {
        name: "fit",
        type: "StackFit",
        description: {
          en: "How to size the stack",
          ar: "كيفية تحديد حجم المكدس",
        },
      },
    ],
    code: `Stack(
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.blue,
    ),
    Positioned(
      top: 20,
      left: 20,
      child: Container(
        width: 100,
        height: 100,
        color: Colors.red,
      ),
    ),
    Positioned(
      bottom: 10,
      right: 10,
      child: Text('Positioned Text'),
    ),
  ],
)`,
    tips: {
      en: [
        "Use Positioned widget to place children at specific coordinates",
        "Children without Positioned will be aligned according to alignment property",
        "Stack is useful for overlaying widgets",
      ],
      ar: [
        "استخدم Positioned widget لوضع الأطفال في إحداثيات محددة",
        "سيتم محاذاة الأطفال بدون Positioned وفقاً لخاصية alignment",
        "Stack مفيد لتراكب الأدوات",
      ],
    },
  },
  {
    id: "floatingactionbutton",
    name: "FloatingActionButton",
    icon: "🚀",
    type: "Interactive Widget",
    description: {
      en: "A round button typically floating above the content of a page. It is used to trigger the most important action in an application.",
      ar: "زر دائري عادة ما يطفو فوق محتوى الصفحة. يُستخدم لتفعيل الإجراء الأكثر أهمية في التطبيق.",
    },
    properties: [
      {
        name: "onPressed",
        type: "VoidCallback",
        description: {
          en: "Called when the button is pressed",
          ar: "يتم استدعاؤها عند الضغط على الزر",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "Typically an Icon widget",
          ar: "عادة ما يكون Icon widget",
        },
      },
      {
        name: "backgroundColor",
        type: "Color",
        description: {
          en: "The background color of the button",
          ar: "لون خلفية الزر",
        },
      },
    ],
    code: `FloatingActionButton(
  onPressed: () {
    print('FAB pressed');
  },
  backgroundColor: Colors.blue,
  elevation: 8,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(16),
  ),
  child: Icon(
    Icons.add,
    color: Colors.white,
    size: 28,
  ),
)`,
    tips: {
      en: [
        "Use for primary actions only",
        "Position using floatingActionButtonLocation in Scaffold",
        "Avoid using multiple FABs for clarity",
      ],
      ar: [
        "استخدم الإجراءات الأساسية فقط",
        "استخدم floatingActionButtonLocation في Scaffold",
        "تجنب استخدام عدة FABs للوضوح",
      ],
    },
  },
  {
    id: "gridview",
    name: "GridView",
    icon: "⊞",
    type: "Scrolling Widget",
    description: {
      en: "A scrollable, 2D array of widgets. GridView is useful for displaying items in a grid format with custom layouts.",
      ar: "مصفوفة 2D قابلة للتمرير من الأدوات. GridView مفيد لعرض العناصر بتنسيق شبكة مع تخطيطات مخصصة.",
    },
    properties: [
      {
        name: "gridDelegate",
        type: "SliverGridDelegate",
        description: {
          en: "Controls the layout of the grid",
          ar: "يتحكم في تخطيط الشبكة",
        },
      },
      {
        name: "children",
        type: "List<Widget>",
        description: {
          en: "The widgets to display in the grid",
          ar: "الأدوات المراد عرضها في الشبكة",
        },
      },
      {
        name: "scrollDirection",
        type: "Axis",
        description: {
          en: "The direction of scrolling",
          ar: "اتجاه التمرير",
        },
      },
    ],
    code: `GridView.count(
  crossAxisCount: 2,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  children: List.generate(
    12,
    (index) => Container(
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(
        child: Text('Item \$index'),
      ),
    ),
  ),
)`,
    tips: {
      en: [
        "Use GridView.count for fixed column count",
        "Use GridView.builder for large lists",
        "Control spacing with crossAxisSpacing and mainAxisSpacing",
      ],
      ar: [
        "استخدم GridView.count لعدد أعمدة ثابت",
        "استخدم GridView.builder للقوائم الكبيرة",
        "التحكم في المسافات باستخدام crossAxisSpacing و mainAxisSpacing",
      ],
    },
  },
  {
    id: "card",
    name: "Card",
    icon: "🎴",
    type: "Layout Widget",
    description: {
      en: "A material design card. A card is a sheet of material used to group related information and actions about a single subject.",
      ar: "بطاقة بتصميم مادي. البطاقة عبارة عن ورقة مادة تُستخدم لتجميع المعلومات والإجراءات ذات الصلة حول موضوع واحد.",
    },
    properties: [
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside the card",
          ar: "الأداة داخل البطاقة",
        },
      },
      {
        name: "elevation",
        type: "double",
        description: {
          en: "The height of the card shadow",
          ar: "ارتفاع ظل البطاقة",
        },
      },
      {
        name: "margin",
        type: "EdgeInsets",
        description: {
          en: "The space around the card",
          ar: "المساحة حول البطاقة",
        },
      },
    ],
    code: `Card(
  elevation: 4,
  margin: EdgeInsets.all(16),
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(12),
  ),
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Column(
      children: [
        Text('Card Title'),
        SizedBox(height: 8),
        Text('Card content here'),
      ],
    ),
  ),
)`,
    tips: {
      en: [
        "Card automatically adds elevation and shadow",
        "Use for grouping related content",
        "Combine with InkWell for tap effects",
      ],
      ar: ["تضيف Card تلقائياً الارتفاع والظل", "استخدم لتجميع المحتوى ذي الصلة", "اجمع مع InkWell لتأثيرات الضغط"],
    },
  },
  {
    id: "image",
    name: "Image",
    icon: "🖼️",
    type: "Basic Widget",
    description: {
      en: "A widget that displays an image. The image is displayed in a box specified by width and height properties.",
      ar: "أداة تعرض صورة. يتم عرض الصورة في صندوق محدد بخصائص العرض والارتفاع.",
    },
    properties: [
      {
        name: "image",
        type: "ImageProvider",
        description: {
          en: "The image to display",
          ar: "الصورة المراد عرضها",
        },
      },
      {
        name: "width",
        type: "double",
        description: {
          en: "The width of the image",
          ar: "عرض الصورة",
        },
      },
      {
        name: "height",
        type: "double",
        description: {
          en: "The height of the image",
          ar: "ارتفاع الصورة",
        },
      },
    ],
    code: `Image(
  image: NetworkImage('https://example.com/image.jpg'),
  width: 200,
  height: 200,
  fit: BoxFit.cover,
)

// Or use convenience constructor
Image.network(
  'https://example.com/image.jpg',
  width: 200,
  height: 200,
  fit: BoxFit.contain,
)`,
    tips: {
      en: [
        "Use Image.network for remote images",
        "Use Image.asset for local images",
        "Use fit property to control image scaling",
      ],
      ar: [
        "استخدم Image.network للصور البعيدة",
        "استخدم Image.asset للصور المحلية",
        "استخدم خاصية fit للتحكم في تحجيم الصورة",
      ],
    },
  },
  {
    id: "icon",
    name: "Icon",
    icon: "✨",
    type: "Basic Widget",
    description: {
      en: "A widget that displays a Material Design icon. Icons are typically used to represent actions or concepts.",
      ar: "أداة تعرض رمز Material Design. تُستخدم الرموز عادة لتمثيل الإجراءات أو المفاهيم.",
    },
    properties: [
      {
        name: "icon",
        type: "IconData",
        description: {
          en: "The icon to display from Icons class",
          ar: "الرمز المراد عرضه من فئة Icons",
        },
      },
      {
        name: "size",
        type: "double",
        description: {
          en: "The size of the icon",
          ar: "حجم الرمز",
        },
      },
      {
        name: "color",
        type: "Color",
        description: {
          en: "The color of the icon",
          ar: "لون الرمز",
        },
      },
    ],
    code: `Icon(
  Icons.favorite,
  size: 30,
  color: Colors.red,
)

// With animation
AnimatedIcon(
  icon: AnimatedIcons.menu_arrow,
  progress: _controller,
  size: 28,
  color: Colors.blue,
)`,
    tips: {
      en: [
        "Use Icons.* constants from material package",
        "Combine with GestureDetector for interactive icons",
        "Use AnimatedIcon for transitions",
      ],
      ar: [
        "استخدم ثوابت Icons.* من حزمة material",
        "اجمع مع GestureDetector للرموز التفاعلية",
        "استخدم AnimatedIcon للانتقالات",
      ],
    },
  },
  {
    id: "appbar",
    name: "AppBar",
    icon: "📌",
    type: "Navigation Widget",
    description: {
      en: "A material design app bar. The app bar is typically used at the top of a Scaffold to display navigation actions and the title.",
      ar: "شريط تطبيق بتصميم مادي. يُستخدم شريط التطبيق عادة في الجزء العلوي من Scaffold لعرض إجراءات الملاحة والعنوان.",
    },
    properties: [
      {
        name: "title",
        type: "Widget",
        description: {
          en: "The primary widget in the app bar",
          ar: "الأداة الأساسية في شريط التطبيق",
        },
      },
      {
        name: "actions",
        type: "List<Widget>",
        description: {
          en: "Widgets displayed to the right of the title",
          ar: "الأدوات المعروضة على يمين العنوان",
        },
      },
      {
        name: "leading",
        type: "Widget",
        description: {
          en: "A widget to display before the title",
          ar: "أداة للعرض قبل العنوان",
        },
      },
    ],
    code: `AppBar(
  title: Text('My App'),
  backgroundColor: Colors.blue,
  elevation: 4,
  leading: IconButton(
    icon: Icon(Icons.menu),
    onPressed: () {},
  ),
  actions: [
    IconButton(
      icon: Icon(Icons.search),
      onPressed: () {},
    ),
    IconButton(
      icon: Icon(Icons.more_vert),
      onPressed: () {},
    ),
  ],
)`,
    tips: {
      en: [
        "AppBar works well with Scaffold",
        "Use actions for additional app functions",
        "Customize with backgroundColor and elevation",
      ],
      ar: ["يعمل AppBar جيداً مع Scaffold", "استخدم actions للوظائف الإضافية", "تخصيص مع backgroundColor و elevation"],
    },
  },
  {
    id: "drawer",
    name: "Drawer",
    icon: "📂",
    type: "Navigation Widget",
    description: {
      en: "A material design drawer that slides in from the left. It is used for navigation in an application.",
      ar: "درج تصميم مادي ينزلق من اليسار. يُستخدم للملاحة في التطبيق.",
    },
    properties: [
      {
        name: "child",
        type: "Widget",
        description: {
          en: "Typically a ListView with navigation items",
          ar: "عادة ما يكون ListView مع عناصر التنقل",
        },
      },
      {
        name: "elevation",
        type: "double",
        description: {
          en: "The height of the drawer shadow",
          ar: "ارتفاع ظل الدرج",
        },
      },
      {
        name: "width",
        type: "double",
        description: {
          en: "The width of the drawer",
          ar: "عرض الدرج",
        },
      },
    ],
    code: `Scaffold(
  appBar: AppBar(title: Text('My App')),
  body: Center(child: Text('Content')),
  drawer: Drawer(
    child: ListView(
      padding: EdgeInsets.zero,
      children: [
        DrawerHeader(
          decoration: BoxDecoration(color: Colors.blue),
          child: Text('Menu'),
        ),
        ListTile(
          leading: Icon(Icons.home),
          title: Text('Home'),
          onTap: () {},
        ),
        ListTile(
          leading: Icon(Icons.settings),
          title: Text('Settings'),
          onTap: () {},
        ),
      ],
    ),
  ),
)`,
    tips: {
      en: [
        "Use with Scaffold for proper functionality",
        "Add DrawerHeader for branding",
        "Use ListTile for menu items",
      ],
      ar: ["استخدم مع Scaffold للعمل الصحيح", "أضف DrawerHeader للعلامات التجارية", "استخدم ListTile لعناصر القائمة"],
    },
  },
  {
    id: "gesturedetector",
    name: "GestureDetector",
    icon: "👆",
    type: "Interactive Widget",
    description: {
      en: "A widget that detects gestures. This widget does not have any visual representation but detects various gestures.",
      ar: "أداة تكتشف الإيماءات. لا تحتوي هذه الأداة على أي تمثيل بصري لكنها تكتشف إيماءات مختلفة.",
    },
    properties: [
      {
        name: "onTap",
        type: "VoidCallback",
        description: {
          en: "Called when the user taps the widget",
          ar: "يتم استدعاؤها عندما ينقر المستخدم على الأداة",
        },
      },
      {
        name: "onLongPress",
        type: "VoidCallback",
        description: {
          en: "Called when the user long presses the widget",
          ar: "يتم استدعاؤها عندما يضغط المستخدم بقوة على الأداة",
        },
      },
      {
        name: "onDoubleTap",
        type: "VoidCallback",
        description: {
          en: "Called when the user double taps the widget",
          ar: "يتم استدعاؤها عندما ينقر المستخدم نقراً مزدوجاً على الأداة",
        },
      },
    ],
    code: `GestureDetector(
  onTap: () {
    print('Tapped!');
  },
  onLongPress: () {
    print('Long pressed!');
  },
  onDoubleTap: () {
    print('Double tapped!');
  },
  child: Container(
    padding: EdgeInsets.all(20),
    color: Colors.blue,
    child: Text('Tap me'),
  ),
)`,
    tips: {
      en: [
        "GestureDetector is for detecting user interactions",
        "Combine multiple gesture callbacks",
        "Use child to wrap the widget to be tapped",
      ],
      ar: [
        "GestureDetector لكشف تفاعلات المستخدم",
        "دمج ردود نداء إيماءات متعددة",
        "استخدم child لتغليف الأداة المراد النقر عليها",
      ],
    },
  },
  {
    id: "inkwell",
    name: "InkWell",
    icon: "💧",
    type: "Interactive Widget",
    description: {
      en: "A rectangular area of material that responds to touch by displaying a splash of color. It is typically used to wrap interactive widgets.",
      ar: "منطقة مستطيلة من المادة تستجيب للمس بعرض رذاذ من اللون. عادة ما يُستخدم لتغليف الأدوات التفاعلية.",
    },
    properties: [
      {
        name: "onTap",
        type: "VoidCallback",
        description: {
          en: "Called when the widget is tapped",
          ar: "يتم استدعاؤها عند النقر على الأداة",
        },
      },
      {
        name: "splashColor",
        type: "Color",
        description: {
          en: "The color of the tap splash effect",
          ar: "لون تأثير رذاذ الصنبور",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside the InkWell",
          ar: "الأداة داخل InkWell",
        },
      },
    ],
    code: `InkWell(
  onTap: () {
    print('InkWell tapped!');
  },
  splashColor: Colors.blue.withOpacity(0.5),
  highlightColor: Colors.blue.withOpacity(0.2),
  child: Container(
    padding: EdgeInsets.all(20),
    child: Text('Tap me'),
  ),
)`,
    tips: {
      en: [
        "InkWell provides visual feedback on tap",
        "Use splashColor to customize tap effect",
        "Better than GestureDetector for material design",
      ],
      ar: [
        "يوفر InkWell ردود فعل بصرية عند النقر",
        "استخدم splashColor لتخصيص تأثير الصنبور",
        "أفضل من GestureDetector لتصميم المواد",
      ],
    },
  },
  {
    id: "expanded",
    name: "Expanded",
    icon: "📏",
    type: "Layout Widget",
    description: {
      en: "A widget that expands a child of a Row, Column, or Flex so that the child fills the available space.",
      ar: "أداة تتوسع فيها طفل Row أو Column أو Flex ليملأ الطفل المساحة المتاحة.",
    },
    properties: [
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget to expand",
          ar: "الأداة المراد توسيعها",
        },
      },
      {
        name: "flex",
        type: "int",
        description: {
          en: "The proportional space to allocate",
          ar: "المساحة النسبية المراد تخصيصها",
        },
      },
    ],
    code: `Row(
  children: [
    Container(width: 100, color: Colors.red),
    Expanded(
      flex: 2,
      child: Container(color: Colors.blue),
    ),
    Expanded(
      flex: 1,
      child: Container(color: Colors.green),
    ),
  ],
)`,
    tips: {
      en: [
        "Use with Row and Column to distribute space",
        "flex property controls proportional space",
        "Expanded with flex 1 takes equal space by default",
      ],
      ar: [
        "استخدم مع Row و Column لتوزيع المساحة",
        "خاصية flex تتحكم في المساحة النسبية",
        "Expanded مع flex 1 تأخذ مساحة متساوية بشكل افتراضي",
      ],
    },
  },
  {
    id: "sizedbox",
    name: "SizedBox",
    icon: "📐",
    type: "Layout Widget",
    description: {
      en: "A box with a specified size. It is useful for giving a specific width and height to a widget or adding spacing.",
      ar: "صندوق بحجم محدد. إنه مفيد لإعطاء عرض وارتفاع محدد لأداة أو إضافة مسافات.",
    },
    properties: [
      {
        name: "width",
        type: "double",
        description: {
          en: "The width of the box",
          ar: "عرض الصندوق",
        },
      },
      {
        name: "height",
        type: "double",
        description: {
          en: "The height of the box",
          ar: "ارتفاع الصندوق",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside the SizedBox",
          ar: "الأداة داخل SizedBox",
        },
      },
    ],
    code: `Column(
  children: [
    Text('First item'),
    SizedBox(height: 16),
    Text('Second item'),
    SizedBox(height: 24),
    Text('Third item'),
  ],
)

// Or with specific dimensions
SizedBox(
  width: 200,
  height: 100,
  child: Container(color: Colors.blue),
)`,
    tips: {
      en: [
        "Use SizedBox for spacing instead of margins",
        "Useful for adding vertical or horizontal gaps",
        "Can be used to give fixed dimensions to widgets",
      ],
      ar: [
        "استخدم SizedBox للمسافات بدلاً من الهوامش",
        "مفيد لإضافة فجوات رأسية أو أفقية",
        "يمكن استخدامه لإعطاء أبعاد ثابتة للأدوات",
      ],
    },
  },
  {
    id: "padding",
    name: "Padding",
    icon: "▦",
    type: "Layout Widget",
    description: {
      en: "A widget that insets its child by the given padding. It adds empty space inside a widget.",
      ar: "أداة تدخل طفلها بالحشو المحدد. تضيف مساحة فارغة داخل أداة.",
    },
    properties: [
      {
        name: "padding",
        type: "EdgeInsets",
        description: {
          en: "The amount of space to add",
          ar: "مقدار المساحة المراد إضافتها",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside the padding",
          ar: "الأداة داخل الحشو",
        },
      },
    ],
    code: `Padding(
  padding: EdgeInsets.all(16),
  child: Text('Padded text'),
)

// Different padding for each side
Padding(
  padding: EdgeInsets.symmetric(
    horizontal: 20,
    vertical: 10,
  ),
  child: Container(
    color: Colors.blue,
    child: Text('Custom padding'),
  ),
)

// Only specific sides
Padding(
  padding: EdgeInsets.only(
    left: 16,
    right: 16,
    bottom: 8,
  ),
  child: Text('Specific padding'),
)`,
    tips: {
      en: [
        "Use for adding internal space around content",
        "Combine EdgeInsets.all() for uniform padding",
        "Use symmetric() for horizontal/vertical consistency",
      ],
      ar: [
        "استخدم لإضافة مساحة داخلية حول المحتوى",
        "اجمع EdgeInsets.all() لحشو موحد",
        "استخدم symmetric() للاتساق الأفقي والرأسي",
      ],
    },
  },
  {
    id: "center",
    name: "Center",
    icon: "⊙",
    type: "Layout Widget",
    description: {
      en: "A widget that centers its child within itself. It centers the child both horizontally and vertically.",
      ar: "أداة توسط طفلها داخلها. توسط الطفل أفقياً وعمودياً.",
    },
    properties: [
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget to center",
          ar: "الأداة المراد توسطها",
        },
      },
      {
        name: "widthFactor",
        type: "double",
        description: {
          en: "If non-null, the width of this widget will be the child's width multiplied by this factor",
          ar: "إذا لم تكن null، سيكون عرض هذه الأداة هو عرض الطفل مضروباً في هذا المعامل",
        },
      },
    ],
    code: `Center(
  child: Text('Centered text'),
)

// Or with custom sizing
Center(
  widthFactor: 2,
  heightFactor: 1.5,
  child: Container(
    color: Colors.blue,
    width: 100,
    height: 100,
  ),
)`,
    tips: {
      en: [
        "Center is useful for centering single widgets",
        "Simpler than Row/Column for centering",
        "Use within Scaffold body for centered content",
      ],
      ar: ["Center مفيد لتوسيط الأدوات الفردية", "أبسط من Row/Column للتوسيط", "استخدم في نص Scaffold للمحتوى المركزي"],
    },
  },
  {
    id: "align",
    name: "Align",
    icon: "🎯",
    type: "Layout Widget",
    description: {
      en: "A widget that aligns its child within itself. It allows positioning a child within the parent using alignment properties.",
      ar: "أداة توسط طفلها داخلها. تسمح بوضع طفل داخل الوالد باستخدام خصائص المحاذاة.",
    },
    properties: [
      {
        name: "alignment",
        type: "AlignmentGeometry",
        description: {
          en: "How to align the child",
          ar: "كيفية محاذاة الطفل",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget to align",
          ar: "الأداة المراد محاذاتها",
        },
      },
    ],
    code: `Align(
  alignment: Alignment.topRight,
  child: Text('Top Right'),
)

// Or with custom alignment
Align(
  alignment: Alignment(0.5, 0.5), // Center
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
  ),
)`,
    tips: {
      en: [
        "Use Alignment constants for positioning",
        "Alignment.center, topLeft, bottomRight, etc.",
        "More flexible than Center for custom positioning",
      ],
      ar: [
        "استخدم ثوابت Alignment للموضع",
        "Alignment.center, topLeft, bottomRight, وغيرها",
        "أكثر مرونة من Center للموضع المخصص",
      ],
    },
  },
  {
    id: "aspect-ratio",
    name: "AspectRatio",
    icon: "◻️",
    type: "Layout Widget",
    description: {
      en: "A widget that attempts to size the child to a specific aspect ratio. The aspect ratio is the ratio of width to height.",
      ar: "أداة تحاول تحديد حجم الطفل لنسبة عرض محددة. نسبة العرض إلى الارتفاع هي نسبة العرض إلى الارتفاع.",
    },
    properties: [
      {
        name: "aspectRatio",
        type: "double",
        description: {
          en: "The ratio of width to height",
          ar: "نسبة العرض إلى الارتفاع",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget inside AspectRatio",
          ar: "الأداة داخل AspectRatio",
        },
      },
    ],
    code: `AspectRatio(
  aspectRatio: 16 / 9,
  child: Container(
    color: Colors.blue,
  ),
)

// Common aspect ratios
// Video: 16/9
// Square: 1/1
// Portrait: 9/16
// Cinematic: 21/9`,
    tips: {
      en: [
        "Useful for maintaining consistent aspect ratios",
        "Common for images and videos",
        "Prevents distortion when resizing",
      ],
      ar: ["مفيد للحفاظ على نسب العرض المتسقة", "شائع للصور والفيديو", "يمنع التشويه عند تغيير الحجم"],
    },
  },
  {
    id: "navigator",
    name: "Navigator",
    icon: "🗺️",
    type: "Navigation Widget",
    description: {
      en: "A widget that manages a set of child widgets with a stack discipline. It is used for page navigation and routing.",
      ar: "أداة تدير مجموعة من الأداة الفرعية مع نظام المكدس. يُستخدم لملاحة الصفحات والتوجيه.",
    },
    properties: [
      {
        name: "onGenerateRoute",
        type: "RouteFactory",
        description: {
          en: "Called when the app is navigated to a new route",
          ar: "يتم استدعاؤها عندما يتم التنقل إلى مسار جديد",
        },
      },
      {
        name: "home",
        type: "Widget",
        description: {
          en: "The widget for the home route",
          ar: "الأداة لمسار الصفحة الرئيسية",
        },
      },
    ],
    code: `// Push a new route
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(),
  ),
);

// Pop back
Navigator.pop(context);

// Named route
Navigator.pushNamed(context, '/second');

// Replace current route
Navigator.pushReplacementNamed(context, '/home');`,
    tips: {
      en: [
        "Use push() to navigate to a new screen",
        "Use pop() to go back",
        "Use named routes for complex navigation",
        "Maintain a stack of screens",
      ],
      ar: [
        "استخدم push() للانتقال إلى شاشة جديدة",
        "استخدم pop() للعودة",
        "استخدم المسارات المسماة للملاحة المعقدة",
        "الحفاظ على مكدس الشاشات",
      ],
    },
  },
  {
    id: "bottomnavbar",
    name: "BottomNavigationBar",
    icon: "📍",
    type: "Navigation Widget",
    description: {
      en: "A material design bottom navigation bar. It is typically used with Scaffold to provide navigation between top-level views.",
      ar: "شريط تنقل أسفل بتصميم مادي. يُستخدم عادة مع Scaffold لتوفير الملاحة بين الآراء على المستوى الأعلى.",
    },
    properties: [
      {
        name: "items",
        type: "List<BottomNavigationBarItem>",
        description: {
          en: "The items in the navigation bar",
          ar: "العناصر في شريط الملاحة",
        },
      },
      {
        name: "currentIndex",
        type: "int",
        description: {
          en: "The currently selected item index",
          ar: "فهرس العنصر المحدد حالياً",
        },
      },
      {
        name: "onTap",
        type: "ValueChanged<int>",
        description: {
          en: "Called when an item is tapped",
          ar: "يتم استدعاؤها عند النقر على عنصر",
        },
      },
    ],
    code: `class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.profile),
            label: 'Profile',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
      ),
    );
  }
}`,
    tips: {
      en: [
        "Use with Scaffold for proper layout",
        "Maximum 5 items recommended",
        "Use with State management for current index",
      ],
      ar: ["استخدم مع Scaffold للتخطيط الصحيح", "أقصى 5 عناصر موصى بها", "استخدم مع State management لفهرس حالي"],
    },
  },
  {
    id: "switch",
    name: "Switch",
    icon: "🔀",
    type: "Input Widget",
    description: {
      en: "A material design switch. A switch toggles the state of a boolean value.",
      ar: "تبديل تصميم مادي. يبدل المفتاح حالة قيمة منطقية.",
    },
    properties: [
      {
        name: "value",
        type: "bool",
        description: {
          en: "Whether this switch is checked",
          ar: "ما إذا تم فحص هذا المفتاح",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<bool>",
        description: {
          en: "Called when the user toggles the switch",
          ar: "يتم استدعاؤها عندما يقوم المستخدم بتبديل المفتاح",
        },
      },
      {
        name: "activeColor",
        type: "Color",
        description: {
          en: "The color of the switch when it is on",
          ar: "لون المفتاح عند تشغيله",
        },
      },
    ],
    code: `class SwitchExample extends StatefulWidget {
  @override
  State<SwitchExample> createState() => _SwitchExampleState();
}

class _SwitchExampleState extends State<SwitchExample> {
  bool _isOn = false;

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: _isOn,
      activeColor: Colors.green,
      onChanged: (value) {
        setState(() {
          _isOn = value;
        });
      },
    );
  }
}`,
    tips: {
      en: [
        "Use with StatefulWidget to track state",
        "Common for toggle settings",
        "Customize colors with activeColor and inactiveColor",
      ],
      ar: [
        "استخدم مع StatefulWidget لتتبع الحالة",
        "شائع لتبديل الإعدادات",
        "تخصيص الألوان مع activeColor و inactiveColor",
      ],
    },
  },
  {
    id: "checkbox",
    name: "Checkbox",
    icon: "☑️",
    type: "Input Widget",
    description: {
      en: "A material design checkbox. A checkbox is used to select one or more items from a set.",
      ar: "مربع اختيار تصميم مادي. يُستخدم مربع الاختيار لتحديد عنصر أو أكثر من مجموعة.",
    },
    properties: [
      {
        name: "value",
        type: "bool",
        description: {
          en: "Whether this checkbox is checked",
          ar: "ما إذا تم فحص مربع الاختيار",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<bool>",
        description: {
          en: "Called when the user checks/unchecks",
          ar: "يتم استدعاؤها عند تحديد/إلغاء تحديد المستخدم",
        },
      },
      {
        name: "activeColor",
        type: "Color",
        description: {
          en: "The color of the checkbox when checked",
          ar: "لون مربع الاختيار عند التحقق",
        },
      },
    ],
    code: `class CheckboxExample extends StatefulWidget {
  @override
  State<CheckboxExample> createState() => _CheckboxExampleState();
}

class _CheckboxExampleState extends State<CheckboxExample> {
  bool _isChecked = false;

  @override
  Widget build(BuildContext context) {
    return Checkbox(
      value: _isChecked,
      activeColor: Colors.blue,
      onChanged: (value) {
        setState(() {
          _isChecked = value ?? false;
        });
      },
    );
  }
}`,
    tips: {
      en: [
        "Use with StatefulWidget to track checked state",
        "Tristate checkbox available with tristate property",
        "Common in forms and lists",
      ],
      ar: [
        "استخدم مع StatefulWidget لتتبع حالة التحقق",
        "مربع اختيار ثلاثي الحالة متاح مع خاصية tristate",
        "شائع في النماذج والقوائم",
      ],
    },
  },
  {
    id: "radio",
    name: "Radio",
    icon: "◉",
    type: "Input Widget",
    description: {
      en: "A material design radio button. Radio buttons are used to select one item from a set of items.",
      ar: "زر راديو بتصميم مادي. تُستخدم أزرار الراديو لتحديد عنصر واحد من مجموعة من العناصر.",
    },
    properties: [
      {
        name: "value",
        type: "T",
        description: {
          en: "The value represented by this radio button",
          ar: "القيمة التي يمثلها زر الراديو",
        },
      },
      {
        name: "groupValue",
        type: "T",
        description: {
          en: "The currently selected value",
          ar: "القيمة المحددة حالياً",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<T>",
        description: {
          en: "Called when the radio button is selected",
          ar: "يتم استدعاؤها عند تحديد زر الراديو",
        },
      },
    ],
    code: `class RadioExample extends StatefulWidget {
  @override
  State<RadioExample> createState() => _RadioExampleState();
}

class _RadioExampleState extends State<RadioExample> {
  String _selectedValue = 'option1';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Radio(
          value: 'option1',
          groupValue: _selectedValue,
          onChanged: (value) {
            setState(() {
              _selectedValue = value as String;
            });
          },
        ),
        Radio(
          value: 'option2',
          groupValue: _selectedValue,
          onChanged: (value) {
            setState(() {
              _selectedValue = value as String;
            });
          },
        ),
      ],
    );
  }
}`,
    tips: {
      en: [
        "Use groupValue to track selected option",
        "Only one radio button per group can be selected",
        "Common in surveys and settings",
      ],
      ar: [
        "استخدم groupValue لتتبع الخيار المحدد",
        "يمكن تحديد زر راديو واحد فقط لكل مجموعة",
        "شائع في الاستطلاعات والإعدادات",
      ],
    },
  },
  {
    id: "slider",
    name: "Slider",
    icon: "🎚️",
    type: "Input Widget",
    description: {
      en: "A material design slider. A slider is used to select a value within a range.",
      ar: "منزلق بتصميم مادي. يُستخدم المنزلق لتحديد قيمة ضمن نطاق.",
    },
    properties: [
      {
        name: "value",
        type: "double",
        description: {
          en: "The currently selected value",
          ar: "القيمة المحددة حالياً",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<double>",
        description: {
          en: "Called when the user changes the value",
          ar: "يتم استدعاؤها عندما يغير المستخدم القيمة",
        },
      },
      {
        name: "min",
        type: "double",
        description: {
          en: "The minimum value",
          ar: "القيمة الدنيا",
        },
      },
      {
        name: "max",
        type: "double",
        description: {
          en: "The maximum value",
          ar: "القيمة الحد الأقصى",
        },
      },
    ],
    code: `class SliderExample extends StatefulWidget {
  @override
  State<SliderExample> createState() => _SliderExampleState();
}

class _SliderExampleState extends State<SliderExample> {
  double _value = 50;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Value: \${_value.toStringAsFixed(1)}'),
        Slider(
          value: _value,
          min: 0,
          max: 100,
          divisions: 10,
          label: _value.toStringAsFixed(1),
          onChanged: (value) {
            setState(() {
              _value = value;
            });
          },
        ),
      ],
    );
  }
}`,
    tips: {
      en: [
        "Use divisions for discrete values",
        "Show label for current value",
        "Common for volume, brightness controls",
      ],
      ar: ["استخدم divisions للقيم المنفصلة", "أظهر الملصق للقيمة الحالية", "شائع للصوت والتحكم في السطوع"],
    },
  },
  {
    id: "dropdownbutton",
    name: "DropdownButton",
    icon: "▼",
    type: "Input Widget",
    description: {
      en: "A material design dropdown button. It allows the user to select one item from a list of options.",
      ar: "زر قائمة منسدلة بتصميم مادي. يسمح للمستخدم باختيار عنصر واحد من قائمة الخيارات.",
    },
    properties: [
      {
        name: "items",
        type: "List<DropdownMenuItem<T>>",
        description: {
          en: "The options in the dropdown",
          ar: "الخيارات في القائمة المنسدلة",
        },
      },
      {
        name: "value",
        type: "T",
        description: {
          en: "The currently selected value",
          ar: "القيمة المحددة حالياً",
        },
      },
      {
        name: "onChanged",
        type: "ValueChanged<T>",
        description: {
          en: "Called when the user selects an item",
          ar: "يتم استدعاؤها عند اختيار المستخدم عنصراً",
        },
      },
    ],
    code: `class DropdownExample extends StatefulWidget {
  @override
  State<DropdownExample> createState() => _DropdownExampleState();
}

class _DropdownExampleState extends State<DropdownExample> {
  String? _selectedValue = 'option1';

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: _selectedValue,
      items: const [
        DropdownMenuItem(
          value: 'option1',
          child: Text('Option 1'),
        ),
        DropdownMenuItem(
          value: 'option2',
          child: Text('Option 2'),
        ),
        DropdownMenuItem(
          value: 'option3',
          child: Text('Option 3'),
        ),
      ],
      onChanged: (value) {
        setState(() {
          _selectedValue = value;
        });
      },
    );
  }
}`,
    tips: {
      en: [
        "Use for selecting from a list of options",
        "Dropdown shows all options when opened",
        "Always provide a default value",
      ],
      ar: [
        "استخدم للاختيار من قائمة الخيارات",
        "تعرض القائمة المنسدلة جميع الخيارات عند فتحها",
        "قدم دائماً قيمة افتراضية",
      ],
    },
  },
  {
    id: "animatedbuilder",
    name: "AnimatedBuilder",
    icon: "✨",
    type: "Animation Widget",
    description: {
      en: "A general purpose widget for building animations. It rebuilds whenever the animation value changes.",
      ar: "أداة عامة الغرض لبناء الرسوم المتحركة. يتم إعادة بنائها كلما تغيرت قيمة الرسم المتحرك.",
    },
    properties: [
      {
        name: "animation",
        type: "Listenable",
        description: {
          en: "The animation to listen to",
          ar: "الرسم المتحرك للاستماع إليه",
        },
      },
      {
        name: "builder",
        type: "TransitionBuilder",
        description: {
          en: "Called when animation value changes",
          ar: "يتم استدعاؤها عندما تتغير قيمة الرسم المتحرك",
        },
      },
    ],
    code: `class AnimationExample extends StatefulWidget {
  @override
  State<AnimationExample> createState() => _AnimationExampleState();
}

class _AnimationExampleState extends State<AnimationExample>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    )..repeat(reverse: true);
    _animation = Tween(begin: 0.0, end: 1.0).animate(_controller);
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Transform.scale(
          scale: _animation.value,
          child: Container(
            width: 100,
            height: 100,
            color: Colors.blue,
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}`,
    tips: {
      en: [
        "Use for custom animations",
        "Combine with AnimationController",
        "Always dispose AnimationController in dispose()",
      ],
      ar: [
        "استخدم للرسوم المتحركة المخصصة",
        "اجمع مع AnimationController",
        "استخدم dispose() دائماً مع AnimationController",
      ],
    },
  },
  {
    id: "tween",
    name: "Tween Animation",
    icon: "🎬",
    type: "Animation Widget",
    description: {
      en: "A tween interpolates between two values. It is used to animate values from one state to another.",
      ar: "يقوم Tween بالاستيفاء بين قيمتين. يُستخدم لتحريك القيم من حالة إلى أخرى.",
    },
    properties: [
      {
        name: "begin",
        type: "T",
        description: {
          en: "The starting value",
          ar: "القيمة الابتدائية",
        },
      },
      {
        name: "end",
        type: "T",
        description: {
          en: "The ending value",
          ar: "القيمة النهائية",
        },
      },
    ],
    code: `// Color Tween
ColorTween(
  begin: Colors.blue,
  end: Colors.red,
).animate(controller)

// Double Tween
Tween<double>(
  begin: 0,
  end: 100,
).animate(controller)

// Size Tween
SizeTween(
  begin: Size(0, 0),
  end: Size(200, 200),
).animate(controller)`,
    tips: {
      en: [
        "Use for interpolating between values",
        "Works with AnimationController",
        "Supports custom types with Animatable",
      ],
      ar: ["استخدم للاستيفاء بين القيم", "يعمل مع AnimationController", "يدعم أنواع مخصصة مع Animatable"],
    },
  },
  {
    id: "opacity",
    name: "Opacity",
    icon: "👻",
    type: "Widget",
    description: {
      en: "A widget that makes its child semi-transparent. The opacity is controlled by the opacity property.",
      ar: "أداة تجعل طفلها شفافاً جزئياً. يتم التحكم في الشفافية بواسطة خاصية opacity.",
    },
    properties: [
      {
        name: "opacity",
        type: "double",
        description: {
          en: "The opacity value from 0.0 to 1.0",
          ar: "قيمة الشفافية من 0.0 إلى 1.0",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget to make transparent",
          ar: "الأداة لجعلها شفافة",
        },
      },
    ],
    code: `Opacity(
  opacity: 0.5,
  child: Container(
    width: 200,
    height: 200,
    color: Colors.blue,
  ),
)

// Animated opacity
AnimatedOpacity(
  opacity: _isVisible ? 1.0 : 0.0,
  duration: Duration(seconds: 1),
  child: Text('Fade in and out'),
)`,
    tips: {
      en: [
        "Use for fade effects",
        "0.0 = fully transparent, 1.0 = fully opaque",
        "AnimatedOpacity for smooth transitions",
      ],
      ar: ["استخدم لتأثيرات التلاشي", "0.0 = شفاف تماماً، 1.0 = معتم تماماً", "AnimatedOpacity للانتقالات الناعمة"],
    },
  },
  {
    id: "transform",
    name: "Transform",
    icon: "🔄",
    type: "Widget",
    description: {
      en: "A widget that applies a transformation before painting its child. Transform can rotate, scale, translate, or skew.",
      ar: "أداة تطبق تحولاً قبل رسم طفلها. يمكن لـ Transform تدوير أو تحجيم أو ترجمة أو إمالة.",
    },
    properties: [
      {
        name: "transform",
        type: "Matrix4",
        description: {
          en: "The transformation matrix",
          ar: "مصفوفة التحويل",
        },
      },
      {
        name: "child",
        type: "Widget",
        description: {
          en: "The widget to transform",
          ar: "الأداة المراد تحويلها",
        },
      },
    ],
    code: `// Rotate
Transform.rotate(
  angle: 0.5,
  child: Container(width: 100, height: 100),
)

// Scale
Transform.scale(
  scale: 1.5,
  child: Container(width: 100, height: 100),
)

// Translate
Transform.translate(
  offset: Offset(50, 100),
  child: Container(width: 100, height: 100),
)`,
    tips: {
      en: [
        "Use for geometric transformations",
        "Use Transform.rotate, scale, translate for common cases",
        "Performance: Transform is better than rebuilding",
      ],
      ar: [
        "استخدم للتحولات الهندسية",
        "استخدم Transform.rotate و scale و translate",
        "الأداء: Transform أفضل من إعادة البناء",
      ],
    },
  },
]
