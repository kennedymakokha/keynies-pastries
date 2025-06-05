import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    
    ({ className = "", variant = "default", size = "default", ...props }, ref) => {
        const baseClasses =
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

        const variantClass =
            variant === "destructive"
                ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                : variant === "outline"
                    ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    : variant === "secondary"
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        : variant === "ghost"
                            ? "hover:bg-accent hover:text-accent-foreground"
                            : variant === "link"
                                ? "text-primary underline-offset-4 hover:underline"
                                : "bg-primary text-primary-foreground hover:bg-primary/90";

        const sizeClass =
            size === "sm"
                ? "h-9 rounded-md px-3"
                : size === "lg"
                    ? "h-11 rounded-md px-8"
                    : size === "icon"
                        ? "h-10 w-10"
                        : "h-10 px-4 py-2";

        const allClasses = `${baseClasses} ${variantClass} ${sizeClass} ${className}`;

        return <button ref={ref} className={allClasses} {...props} />;
    }
);

Button.displayName = "Button";

export { Button };
