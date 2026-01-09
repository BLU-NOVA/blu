"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Calculator,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Globe,
  Loader2,
} from "lucide-react";
import Link from "next/link";

interface CurrencyConfig {
  code: string;
  symbol: string;
  rate: number;
  locale: string;
}

interface GeoData {
  country: string;
  countryCode: string;
  currency: CurrencyConfig;
}

const currencyConfigs: Record<string, CurrencyConfig> = {
  // Africa
  KE: { code: "KES", symbol: "KSh", rate: 155, locale: "en-KE" },
  NG: { code: "NGN", symbol: "₦", rate: 1550, locale: "en-NG" },
  ZA: { code: "ZAR", symbol: "R", rate: 18.5, locale: "en-ZA" },
  GH: { code: "GHS", symbol: "GH₵", rate: 12.5, locale: "en-GH" },
  EG: { code: "EGP", symbol: "E£", rate: 31, locale: "ar-EG" },
  TZ: { code: "TZS", symbol: "TSh", rate: 2500, locale: "en-TZ" },
  UG: { code: "UGX", symbol: "USh", rate: 3800, locale: "en-UG" },
  RW: { code: "RWF", symbol: "FRw", rate: 1250, locale: "en-RW" },
  ET: { code: "ETB", symbol: "Br", rate: 56, locale: "am-ET" },
  // Europe
  GB: { code: "GBP", symbol: "£", rate: 0.79, locale: "en-GB" },
  DE: { code: "EUR", symbol: "€", rate: 0.92, locale: "de-DE" },
  FR: { code: "EUR", symbol: "€", rate: 0.92, locale: "fr-FR" },
  IT: { code: "EUR", symbol: "€", rate: 0.92, locale: "it-IT" },
  ES: { code: "EUR", symbol: "€", rate: 0.92, locale: "es-ES" },
  NL: { code: "EUR", symbol: "€", rate: 0.92, locale: "nl-NL" },
  CH: { code: "CHF", symbol: "CHF", rate: 0.88, locale: "de-CH" },
  SE: { code: "SEK", symbol: "kr", rate: 10.5, locale: "sv-SE" },
  // Americas
  US: { code: "USD", symbol: "$", rate: 1, locale: "en-US" },
  CA: { code: "CAD", symbol: "C$", rate: 1.36, locale: "en-CA" },
  MX: { code: "MXN", symbol: "MX$", rate: 17.2, locale: "es-MX" },
  BR: { code: "BRL", symbol: "R$", rate: 4.95, locale: "pt-BR" },
  AR: { code: "ARS", symbol: "ARS$", rate: 850, locale: "es-AR" },
  CO: { code: "COP", symbol: "COL$", rate: 4000, locale: "es-CO" },
  // Asia
  IN: { code: "INR", symbol: "₹", rate: 83, locale: "en-IN" },
  CN: { code: "CNY", symbol: "¥", rate: 7.2, locale: "zh-CN" },
  JP: { code: "JPY", symbol: "¥", rate: 149, locale: "ja-JP" },
  SG: { code: "SGD", symbol: "S$", rate: 1.34, locale: "en-SG" },
  AE: { code: "AED", symbol: "د.إ", rate: 3.67, locale: "ar-AE" },
  SA: { code: "SAR", symbol: "﷼", rate: 3.75, locale: "ar-SA" },
  PK: { code: "PKR", symbol: "₨", rate: 280, locale: "en-PK" },
  PH: { code: "PHP", symbol: "₱", rate: 56, locale: "en-PH" },
  ID: { code: "IDR", symbol: "Rp", rate: 15500, locale: "id-ID" },
  MY: { code: "MYR", symbol: "RM", rate: 4.7, locale: "ms-MY" },
  TH: { code: "THB", symbol: "฿", rate: 35, locale: "th-TH" },
  VN: { code: "VND", symbol: "₫", rate: 24500, locale: "vi-VN" },
  // Oceania
  AU: { code: "AUD", symbol: "A$", rate: 1.53, locale: "en-AU" },
  NZ: { code: "NZD", symbol: "NZ$", rate: 1.64, locale: "en-NZ" },
};

const defaultCurrency: CurrencyConfig = {
  code: "USD",
  symbol: "$",
  rate: 1,
  locale: "en-US",
};

const regionalPricingMultipliers: Record<string, number> = {
  // Africa - discounted rates
  KE: 0.4,
  NG: 0.4,
  ZA: 0.5,
  GH: 0.4,
  EG: 0.45,
  TZ: 0.4,
  UG: 0.4,
  RW: 0.4,
  ET: 0.4,
  // South Asia - discounted rates
  IN: 0.45,
  PK: 0.4,
  PH: 0.5,
  ID: 0.5,
  VN: 0.45,
  // Latin America - moderate discount
  MX: 0.6,
  BR: 0.55,
  AR: 0.5,
  CO: 0.5,
  // Standard rates
  US: 1,
  CA: 0.95,
  GB: 1,
  DE: 1,
  FR: 1,
  AU: 0.95,
  SG: 0.9,
  AE: 0.9,
  JP: 0.95,
  CN: 0.7,
};

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  icon: React.ReactNode;
}

interface PricingTier {
  name: string;
  multiplier: number;
  description: string;
  features: string[];
}

const services: ServiceOption[] = [
  {
    id: "web-development",
    name: "Web Development",
    basePrice: 5000,
    description: "Full-stack web applications with modern frameworks",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    basePrice: 8000,
    description: "Native and cross-platform mobile applications",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    basePrice: 2500,
    description: "User interface and experience design",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    id: "api-development",
    name: "API Development",
    basePrice: 4000,
    description: "RESTful APIs and backend services",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    basePrice: 6000,
    description: "Machine learning and AI model integration",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "devops",
    name: "DevOps & Deployment",
    basePrice: 3000,
    description: "CI/CD setup and cloud deployment",
    icon: <Clock className="h-5 w-5" />,
  },
];

const pricingTiers: PricingTier[] = [
  {
    name: "Startup",
    multiplier: 1,
    description: "Perfect for early-stage startups",
    features: ["Core features", "Basic support", "2-week delivery"],
  },
  {
    name: "Professional",
    multiplier: 1.5,
    description: "Ideal for growing businesses",
    features: [
      "Advanced features",
      "Priority support",
      "4-week delivery",
      "Maintenance",
    ],
  },
  {
    name: "Enterprise",
    multiplier: 2,
    description: "For large-scale projects",
    features: [
      "Custom solutions",
      "Dedicated team",
      "6-week delivery",
      "SLA guarantee",
      "Training",
    ],
  },
];

const additionalFeatures = [
  { id: "maintenance", name: "3 Months Maintenance", price: 1000 },
  { id: "training", name: "Team Training", price: 500 },
  { id: "documentation", name: "Technical Documentation", price: 400 },
  { id: "testing", name: "Comprehensive Testing", price: 800 },
  { id: "security-audit", name: "Security Audit", price: 1000 },
];

export function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState<string>("startup");
  const [projectComplexity, setProjectComplexity] = useState<number[]>([50]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code || "US";
        const currency = currencyConfigs[countryCode] || defaultCurrency;

        setGeoData({
          country: data.country_name || "United States",
          countryCode,
          currency,
        });
      } catch (error) {
        console.error("Failed to detect location:", error);
        setGeoData({
          country: "United States",
          countryCode: "US",
          currency: defaultCurrency,
        });
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const formatPrice = (usdPrice: number): string => {
    if (!geoData) return `$${usdPrice.toLocaleString()}`;

    const regionalMultiplier =
      regionalPricingMultipliers[geoData.countryCode] || 1;
    const adjustedUsdPrice = usdPrice * regionalMultiplier;
    const localPrice = adjustedUsdPrice * geoData.currency.rate;

    try {
      return new Intl.NumberFormat(geoData.currency.locale, {
        style: "currency",
        currency: geoData.currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(localPrice);
    } catch {
      return `${geoData.currency.symbol}${Math.round(
        localPrice
      ).toLocaleString()}`;
    }
  };

  const calculatePrice = () => {
    let basePrice = 0;

    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        basePrice += service.basePrice;
      }
    });

    const complexityValue = projectComplexity[0] || 50;
    const complexityMultiplier = complexityValue / 50;
    basePrice = basePrice * complexityMultiplier;

    const tier = pricingTiers.find(
      (t) => t.name.toLowerCase() === selectedTier
    );
    if (tier) {
      basePrice = basePrice * tier.multiplier;
    }

    selectedFeatures.forEach((featureId) => {
      const feature = additionalFeatures.find((f) => f.id === featureId);
      if (feature) {
        basePrice += feature.price;
      }
    });

    return Math.round(basePrice);
  };

  const calculateTimeline = () => {
    let baseWeeks = selectedServices.length * 2;
    const complexityValue = projectComplexity[0] || 50;
    const complexityMultiplier = complexityValue / 50;
    const tier = pricingTiers.find(
      (t) => t.name.toLowerCase() === selectedTier
    );

    if (tier) {
      if (tier.name === "Startup") baseWeeks = Math.max(baseWeeks, 2);
      else if (tier.name === "Professional") baseWeeks = Math.max(baseWeeks, 4);
      else baseWeeks = Math.max(baseWeeks, 6);
    }

    return Math.round(baseWeeks * complexityMultiplier);
  };

  const totalPrice = calculatePrice();
  const estimatedWeeks = calculateTimeline();

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">
              We are Loading the prices for you...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Pricing Calculator</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Estimate Your
            <span className="text-primary"> Project Cost</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Get an instant estimate for your project. Select your requirements
            and see the pricing in real-time.
          </p>
          {geoData && (
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
              <Globe className="h-4 w-4" />
              <span>
                Showing prices in {geoData.currency.code} for {geoData.country}
              </span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Services Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Select Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([
                              ...selectedServices,
                              service.id,
                            ]);
                          } else {
                            setSelectedServices(
                              selectedServices.filter((id) => id !== service.id)
                            );
                          }
                        }}
                      />
                      <div>
                        <label
                          htmlFor={service.id}
                          className="font-medium cursor-pointer"
                        >
                          {service.name}
                        </label>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {formatPrice(service.basePrice)}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pricing Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {pricingTiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedTier === tier.name.toLowerCase()
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTier(tier.name.toLowerCase())}
                    >
                      <h3 className="font-semibold mb-2">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {tier.description}
                      </p>
                      <div className="text-lg font-bold mb-3">
                        {tier.multiplier}x
                      </div>
                      <div className="space-y-1">
                        {tier.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs"
                          >
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Complexity */}
            <Card>
              <CardHeader>
                <CardTitle>Project Complexity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Simple</span>
                    <span>Complex</span>
                  </div>
                  <Slider
                    value={projectComplexity}
                    onValueChange={setProjectComplexity}
                    max={100}
                    step={10}
                    className="w-full"
                  />
                  <div className="text-center">
                    <span className="text-2xl font-bold">
                      {projectComplexity[0]}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {additionalFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id={feature.id}
                          checked={selectedFeatures.includes(feature.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFeatures([
                                ...selectedFeatures,
                                feature.id,
                              ]);
                            } else {
                              setSelectedFeatures(
                                selectedFeatures.filter(
                                  (id) => id !== feature.id
                                )
                              );
                            }
                          }}
                        />
                        <label htmlFor={feature.id} className="cursor-pointer">
                          {feature.name}
                        </label>
                      </div>
                      <span className="font-semibold">
                        +{formatPrice(feature.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Price Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {formatPrice(totalPrice)}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{estimatedWeeks} weeks estimated</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Base Services</span>
                    <span>
                      {formatPrice(
                        selectedServices.reduce((sum, serviceId) => {
                          const service = services.find(
                            (s) => s.id === serviceId
                          );
                          return sum + (service?.basePrice || 0);
                        }, 0)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complexity</span>
                    <span>{(projectComplexity[0] / 50).toFixed(1)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package</span>
                    <span>
                      {
                        pricingTiers.find(
                          (t) => t.name.toLowerCase() === selectedTier
                        )?.multiplier
                      }
                      x
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Add-ons</span>
                    <span>
                      {formatPrice(
                        selectedFeatures.reduce((sum, featureId) => {
                          const feature = additionalFeatures.find(
                            (f) => f.id === featureId
                          );
                          return sum + (feature?.price || 0);
                        }, 0)
                      )}
                    </span>
                  </div>
                </div>

                <Separator />

                {selectedServices.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <div className="space-y-2">
                      {selectedServices.map((serviceId) => {
                        const service = services.find(
                          (s) => s.id === serviceId
                        );
                        return service ? (
                          <div
                            key={serviceId}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>{service.name}</span>
                          </div>
                        ) : null;
                      })}
                      {pricingTiers
                        .find((t) => t.name.toLowerCase() === selectedTier)
                        ?.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <Link href="/book">
                  <Button className="w-full" size="lg">
                    Get Detailed Quote
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  This is an estimate. Final pricing may vary based on specific
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
