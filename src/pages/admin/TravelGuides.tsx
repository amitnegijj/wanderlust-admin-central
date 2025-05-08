import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { useForm } from 'react-hook-form';
import { 
  MapPin, 
  Calendar, 
  Filter, 
  Car, 
  Train, 
  Bus, 
  Plane, 
  Hotel, 
  Utensils, 
  Camera, 
  Route 
} from 'lucide-react';

const TravelGuides = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [transportFilters, setTransportFilters] = useState({
    car: false,
    train: false,
    bus: false,
    airplane: false,
  });
  const [dayFilters, setDayFilters] = useState({
    '1-3': false,
    '4-7': false,
    '8-14': false,
    '15+': false,
  });
  const [attractionFilters, setAttractionFilters] = useState({
    hotels: false,
    restaurants: false,
    landmarks: false,
    activities: false,
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      title: '',
      destination: '',
      duration: '',
      description: '',
      transport: [],
      attractions: [],
    }
  });

  // Mock data for travel guides
  const guides = [
    { 
      id: 1, 
      title: "Ultimate Paris Guide", 
      author: "Sophie Martin", 
      status: "Published", 
      date: "2023-05-15",
      days: 7,
      transport: ["train", "bus"],
      attractions: ["hotels", "restaurants", "landmarks"]
    },
    { 
      id: 2, 
      title: "Tokyo: Hidden Gems", 
      author: "James Wilson", 
      status: "Published", 
      date: "2023-04-22",
      days: 10,
      transport: ["airplane", "train"],
      attractions: ["landmarks", "activities"]
    },
    { 
      id: 3, 
      title: "New York City Weekend", 
      author: "Emma Johnson", 
      status: "Draft", 
      date: "2023-06-10",
      days: 3,
      transport: ["airplane", "bus"],
      attractions: ["hotels", "restaurants"]
    },
    { 
      id: 4, 
      title: "Exploring Bali's Beaches", 
      author: "Michael Brown", 
      status: "Published", 
      date: "2023-03-05",
      days: 14,
      transport: ["airplane", "car"],
      attractions: ["hotels", "activities"]
    },
    { 
      id: 5, 
      title: "Rome in 3 Days", 
      author: "Olivia Davis", 
      status: "Review", 
      date: "2023-06-01",
      days: 3,
      transport: ["airplane", "bus"],
      attractions: ["landmarks", "restaurants"]
    },
  ];

  // Filter guides based on search term and filters
  const filteredGuides = guides.filter(guide => {
    // Search filter
    if (searchTerm && !guide.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Transport filters
    const activeTransportFilters = Object.entries(transportFilters).filter(([_, value]) => value).map(([key]) => key);
    if (activeTransportFilters.length > 0 && !guide.transport.some(t => activeTransportFilters.includes(t))) {
      return false;
    }

    // Day filters
    if (dayFilters['1-3'] && (guide.days < 1 || guide.days > 3)) {
      if (!dayFilters['4-7'] && !dayFilters['8-14'] && !dayFilters['15+']) {
        return false;
      }
    }
    if (dayFilters['4-7'] && (guide.days < 4 || guide.days > 7)) {
      if (!dayFilters['1-3'] && !dayFilters['8-14'] && !dayFilters['15+']) {
        return false;
      }
    }
    if (dayFilters['8-14'] && (guide.days < 8 || guide.days > 14)) {
      if (!dayFilters['1-3'] && !dayFilters['4-7'] && !dayFilters['15+']) {
        return false;
      }
    }
    if (dayFilters['15+'] && guide.days < 15) {
      if (!dayFilters['1-3'] && !dayFilters['4-7'] && !dayFilters['8-14']) {
        return false;
      }
    }

    // Attraction filters
    const activeAttractionFilters = Object.entries(attractionFilters).filter(([_, value]) => value).map(([key]) => key);
    if (activeAttractionFilters.length > 0 && !guide.attractions.some(a => activeAttractionFilters.includes(a))) {
      return false;
    }

    return true;
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);
  
  const handleAddGuide = (data) => {
    console.log("Adding new guide:", data);
    // Here you would typically send this data to your backend
    setIsAddModalOpen(false);
    form.reset();
  };

  const handleTransportFilterChange = (transport) => {
    setTransportFilters(prev => ({
      ...prev,
      [transport]: !prev[transport]
    }));
  };

  const handleDayFilterChange = (day) => {
    setDayFilters(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const handleAttractionFilterChange = (attraction) => {
    setAttractionFilters(prev => ({
      ...prev,
      [attraction]: !prev[attraction]
    }));
  };

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Travel Guides</h1>
            <p className="text-muted-foreground">Manage and create travel guide content</p>
          </div>
          <Button 
            className="bg-wanderlust-teal hover:bg-wanderlust-teal/90"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add New Guide
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <CardTitle>All Travel Guides</CardTitle>
                <CardDescription>Manage your published and draft guides</CardDescription>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Input 
                  placeholder="Search guides..." 
                  className="w-full max-w-[250px]" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={isFilterOpen ? "bg-gray-100" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Filter Panel */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <CollapsibleContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-4 bg-gray-50 rounded-md">
                  {/* Transport Filters */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Route className="h-4 w-4 mr-2" /> Transport Options
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="car" 
                          checked={transportFilters.car}
                          onCheckedChange={() => handleTransportFilterChange('car')} 
                        />
                        <label htmlFor="car" className="text-sm flex items-center">
                          <Car className="h-4 w-4 mr-1" /> Car
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="train" 
                          checked={transportFilters.train}
                          onCheckedChange={() => handleTransportFilterChange('train')} 
                        />
                        <label htmlFor="train" className="text-sm flex items-center">
                          <Train className="h-4 w-4 mr-1" /> Train
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bus" 
                          checked={transportFilters.bus}
                          onCheckedChange={() => handleTransportFilterChange('bus')} 
                        />
                        <label htmlFor="bus" className="text-sm flex items-center">
                          <Bus className="h-4 w-4 mr-1" /> Bus
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="airplane" 
                          checked={transportFilters.airplane}
                          onCheckedChange={() => handleTransportFilterChange('airplane')} 
                        />
                        <label htmlFor="airplane" className="text-sm flex items-center">
                          <Plane className="h-4 w-4 mr-1" /> Airplane
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Days Filters */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> Duration (Days)
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="1-3days" 
                          checked={dayFilters['1-3']}
                          onCheckedChange={() => handleDayFilterChange('1-3')}
                        />
                        <label htmlFor="1-3days" className="text-sm">1-3 days</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="4-7days" 
                          checked={dayFilters['4-7']}
                          onCheckedChange={() => handleDayFilterChange('4-7')}
                        />
                        <label htmlFor="4-7days" className="text-sm">4-7 days</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="8-14days" 
                          checked={dayFilters['8-14']}
                          onCheckedChange={() => handleDayFilterChange('8-14')}
                        />
                        <label htmlFor="8-14days" className="text-sm">8-14 days</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="15+days" 
                          checked={dayFilters['15+']}
                          onCheckedChange={() => handleDayFilterChange('15+')}
                        />
                        <label htmlFor="15+days" className="text-sm">15+ days</label>
                      </div>
                    </div>
                  </div>

                  {/* Attractions Filters */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" /> Attractions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hotels" 
                          checked={attractionFilters.hotels}
                          onCheckedChange={() => handleAttractionFilterChange('hotels')}
                        />
                        <label htmlFor="hotels" className="text-sm flex items-center">
                          <Hotel className="h-4 w-4 mr-1" /> Hotels
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="restaurants" 
                          checked={attractionFilters.restaurants}
                          onCheckedChange={() => handleAttractionFilterChange('restaurants')}
                        />
                        <label htmlFor="restaurants" className="text-sm flex items-center">
                          <Utensils className="h-4 w-4 mr-1" /> Restaurants
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="landmarks" 
                          checked={attractionFilters.landmarks}
                          onCheckedChange={() => handleAttractionFilterChange('landmarks')}
                        />
                        <label htmlFor="landmarks" className="text-sm flex items-center">
                          <MapPin className="h-4 w-4 mr-1" /> Landmarks
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="activities" 
                          checked={attractionFilters.activities}
                          onCheckedChange={() => handleAttractionFilterChange('activities')}
                        />
                        <label htmlFor="activities" className="text-sm flex items-center">
                          <Camera className="h-4 w-4 mr-1" /> Activities
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Transport</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGuides.map((guide) => (
                    <TableRow key={guide.id}>
                      <TableCell className="font-medium">{guide.title}</TableCell>
                      <TableCell>{guide.author}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          guide.status === 'Published' ? 'bg-green-100 text-green-800' :
                          guide.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {guide.status}
                        </span>
                      </TableCell>
                      <TableCell>{guide.days} days</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          {guide.transport.includes('car') && <Car className="h-4 w-4" />}
                          {guide.transport.includes('train') && <Train className="h-4 w-4" />}
                          {guide.transport.includes('bus') && <Bus className="h-4 w-4" />}
                          {guide.transport.includes('airplane') && <Plane className="h-4 w-4" />}
                        </div>
                      </TableCell>
                      <TableCell>{guide.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Guide Categories</CardTitle>
              <CardDescription>Organize your travel guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">City Guides</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">12 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Beach Destinations</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">8 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Mountain Retreats</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">5 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Food & Culture</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">9 guides</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">Manage Categories</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Guide Statistics</CardTitle>
              <CardDescription>Performance metrics for your guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Most Popular Guide</p>
                    <p className="font-medium">Ultimate Paris Guide</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="font-medium">12,458</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Guides</p>
                    <p className="font-medium">34</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-medium">28</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Reading Time</p>
                    <p className="font-medium">4 min 30 sec</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Completion Rate</p>
                    <p className="font-medium">68%</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">View Detailed Stats</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add New Guide Dialog */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Add New Travel Guide</CardTitle>
              <CardDescription>Create a new destination guide</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(handleAddGuide)} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input 
                    id="title" 
                    placeholder="Guide title" 
                    {...form.register("title")}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="destination" className="text-sm font-medium">Destination</label>
                  <Input 
                    id="destination" 
                    placeholder="City, Country" 
                    {...form.register("destination")}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="duration" className="text-sm font-medium">Duration (days)</label>
                  <Input 
                    id="duration" 
                    type="number" 
                    min="1" 
                    {...form.register("duration")}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Transport Options</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="carOption" />
                      <label htmlFor="carOption" className="text-sm flex items-center">
                        <Car className="h-4 w-4 mr-1" /> Car
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trainOption" />
                      <label htmlFor="trainOption" className="text-sm flex items-center">
                        <Train className="h-4 w-4 mr-1" /> Train
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="busOption" />
                      <label htmlFor="busOption" className="text-sm flex items-center">
                        <Bus className="h-4 w-4 mr-1" /> Bus
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="airplaneOption" />
                      <label htmlFor="airplaneOption" className="text-sm flex items-center">
                        <Plane className="h-4 w-4 mr-1" /> Airplane
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Attractions</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hotelsAttraction" />
                      <label htmlFor="hotelsAttraction" className="text-sm flex items-center">
                        <Hotel className="h-4 w-4 mr-1" /> Hotels
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="restaurantsAttraction" />
                      <label htmlFor="restaurantsAttraction" className="text-sm flex items-center">
                        <Utensils className="h-4 w-4 mr-1" /> Restaurants
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="landmarksAttraction" />
                      <label htmlFor="landmarksAttraction" className="text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> Landmarks
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="activitiesAttraction" />
                      <label htmlFor="activitiesAttraction" className="text-sm flex items-center">
                        <Camera className="h-4 w-4 mr-1" /> Activities
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Description</label>
                  <Textarea 
                    id="description" 
                    placeholder="Write a brief description of the travel guide"
                    rows={3}
                    {...form.register("description")}
                  />
                </div>
                
                <div className="flex justify-end gap-2 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsAddModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
                    Create Guide
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </AdminLayout>
  );
};

export default TravelGuides;
